const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
  if(req.method === "GET") {
    if(req.url === "/") {
      const first = fs.readFileSync("./index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(first);
      res.end();
    }

    if(req.url === "/index.html") {
      const first = fs.readFileSync("./index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(first);
      res.end();
    }

    if(req.url === "/index.css") {
      const first = fs.readFileSync("./index.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=uft-8');
      res.write(first);
      res.end();
    }

    if(req.url === "/index.js") {
      const first = fs.readFileSync("./index.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'apprication/javascript; charset=uft-8');
      res.write(first);
      res.end();
    }


    console.log(req.url)
  }
});

const PORT = 3000;
server.listen(PORT, function(err){
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감")
  console.log(`http://localhost:${PORT}`);
})
