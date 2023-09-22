const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
    const {method, url} = req;

    console.log("Server is running");
    // console.log(url);
    // console.log(method);

    res.writeHead(200, {
        'Content-Type': 'text/html,'
    });
    res.write("<h2>Hello from web server! Updated</h2>");
    res.end();
});

server.listen(port);
console.log(`Server is listening on port: ${port}.`);