const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const server = http.createServer((req,res) => {
  if(req.method === "GET") {
    console.log("요청 URL 검사 :", req.url);
    if(req.url === "/") {

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      const htmlData = fs.readFileSync("./public/index.html", "utf-8");
      res.write(htmlData);
      res.end();
    }

    if(req.url === "/style.css") {

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      const cssData = fs.readFileSync("./public/style.css", "utf-8");
      res.write(cssData);
      res.end();
    }

    if(req.url === "/names.js") {

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/javascript");
      const jsData = fs.readFileSync("./public/names.js", "utf-8");
      res.write(jsData);
      res.end();
    }

    if(req.url.startsWith("/Myname")) {
      const inputData = req.url.split("?")[1];
      const data = qs.decode(inputData);
      console.log(data);
    }
  }
});

const PORT = 3000;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버돌아감")
  console.log('http://localhost:${PORT}');
})