const http = require('http');
const PORT = 1010;

http.createServer((request, response)=> {
    response.setHeader("Content-Type", "text/html");
    let b = 1;
    let noob = '';
    let bot = '';
    for (let i in request.headers){
        noob = request.headers;
        bot += `${b}:${i} <br>`
        b++;
    }
    response.end(`<h2> url:${request.url}</h2> <h2> method:${request.method} </h2> <h2> headers:${bot}</h2>`);
    
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
}).listen(PORT);
console.log(`Server started on port ${PORT}`);
