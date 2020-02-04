import path from "path";
import express from "express";
import * as protoBuf from "protobufjs";
import {employees} from "../resources/employee";
import { EventEmitter } from "events";

const PORT: string = process.env.PORT || "3000";
const protoFolder = "protos";
const app = express();
const emitter = new EventEmitter();
app.use(express.static("./protos"));

let Message: protoBuf.Type;
protoBuf.load(path.join("./", protoFolder, 'message.proto'))
.then((root) => {
    Message = root.lookupType("com.demo.Message");
})
.catch((reason) => {
    console.error(reason);
});

function encryptMessage(): Promise<any>{
    const payload = employees[Math.round(Math.random()*2)];
    const errMsg = Message.verify(payload);
    if(errMsg){
        return Promise.reject(errMsg);
    }
    const msg = Message.create(payload);
    const bufferData = Message.encode(msg).finish();
    return Promise.resolve(bufferData);
}

emitter.on("protomsg",(data) => {
    const decoded = Message.decode(data).toJSON();
    console.log("Receiving",decoded);
});

const timer = setInterval(() => {
    encryptMessage()
    .then((buffData) => {
        if(buffData instanceof Uint8Array){
            console.log("Emitting", buffData);
            emitter.emit("protomsg", buffData);
        } else{
            console.log("Incorrect Data. Could not fire event");
        }
    })
    .catch((err) => {
        console.error(err);
    })
}, 3000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Resetting the interval function...");
}, 30000);

app.get("/api/start",async(req, res, next) => {
    if(req.headers["content-type"] !== "application/json"){
        res.status(304).send("Incorrect Content Type");
    }
    encryptMessage().then((buffData) => {
        if(buffData instanceof Uint8Array){
            const response = emitter.emit("protomsg", buffData);
            if(response){
                res.status(200).send("Buffer Data Event Triggered");
            } else{
                res.status(400).send("Error emitting event");
            }
        } else{
            res.status(400).send("Incorrect Data");
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.all("*", (req, res) => {
    res.status(400).send("Not Supported");
});

app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
});



