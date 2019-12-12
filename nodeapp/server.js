var http = require('http');
var scripcode = require('../scripcode');
var srv = http.createServer((req, res)=>{
res.writeHead(200, 'Request Success',{'Content-type': 'text/plain'});
res.end('Hello!!');
}).listen(3000, '127.0.0.1',()=>{
    console.log("Server Started!!!");
});
