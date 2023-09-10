console.log("kk");
const megalox = require('http');
const PORT = 2288;
megalox.createServer((request, response)=> {
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hello, world</h1>");
}).listen(PORT);
console.log('Server started on port ${PORT}');