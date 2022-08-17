// http handle the node server's request and response.
const http = require('http');

http.createServer((req, res)=>{
    res.write("Server Start....");
    res.end()
}).listen(5000);

