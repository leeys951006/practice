const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
  if(req.method === "GET") {
    if(req.url === "/") {

      const first = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === "/index.html") {

      const first = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(first);
      res.end();
    }
    if(req.url === "/style.css") {

      const second= fs.readFileSync("./public/style.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(second);
      res.end();
    }
    if(req.url === "/index.js") {

      const third= fs.readFileSync("./public/index.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.write(third);
      res.end();
    }

    if(req.url === "/index2.html") {

      const four= fs.readFileSync("./public/index2.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(four);
      res.end();
    }
    if(req.url === "/index3.html") {

      const five= fs.readFileSync("./public/index3.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(five);
      res.end();
    }

    

    console.log(req.url)
  }
});

server.listen(3000);