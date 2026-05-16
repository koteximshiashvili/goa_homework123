const http = require("node:http");
const PORT = 3001;

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.end("Welcome to Mini API Server!");
    }

    else if (req.method === "GET" && req.url === "/time") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ time: new Date().toISOString() }));
    }

    else if (req.method === "POST" && req.url === "/echo") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            res.setHeader("Content-Type", "application/json");
            res.end(body);
        });
    }

    else if (req.method === "POST" && req.url === "/square") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const n = parseInt(body);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ input: n, square: n * n }));
        });
    }

    else if (req.method === "POST" && req.url === "/sum") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const arr = JSON.parse(body);
            const sum = arr.reduce((a, b) => a + b, 0);
            res.setHeader("Content-Type", "application/json");
            res.setHeader("X-Powered-By", "Node.js homework");
            res.end(JSON.stringify({ numbers: arr, sum }));
        });
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(PORT, () => console.log("http://localhost:3001"));
