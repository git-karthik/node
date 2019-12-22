import {copyDirSync, removeDirSync} from "./fileops";

const stdin =  process.openStdin();

// stdin.addListener("data", (arg) => {
//     console.log(`You entered ${arg}`);
// });

const args = process.argv;
const params = Array<string>();
const options = ["rm", "cp"];
args.forEach((arg, index) => {
    if ( index > 1 ) {
        params.push(arg);
    }
    // console.log("Arg:" + arg + "Index:" + index);
});

if  (!params.length) {
    throw Error("Required Parameters not found. try npm start [Options] [pathLike] [pathLike]");
}

if (!options.includes(params[0])) {
    throw new Error(`Incorrect option provided. Allowed Values ${options}`);
}

if (params[0] === "rm") {
    
    const todos = params.slice(1);
    
    if (!todos || !todos.length) {
        throw Error("No path provided to remove.");
    }

    todos.forEach((todo) => {
        removeDirSync(todo);
    });
}
