const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
  if(req.method === "GET"){
    if(req.url === "/") {

      const one = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(one);
      res.end();
    }

    if(req.url === "/index.html") {

      const two = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(two);
      res.end();
    }

    if(req.url === "/index.css") {

      const three = fs.readFileSync("./public/index.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(three);
      res.end();
    }

    if(req.url === "/index2.html") {

      const four = fs.readFileSync("./public/index2.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(four);
      res.end();
    }

    if(req.url === "/index2.css") {

      const five = fs.readFileSync("./public/index2.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(five);
      res.end();
    }
    if(req.url === "/index2.js") {

      const thirty = fs.readFileSync("./public/index2.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.write(thirty);
      res.end();
    }

    if(req.url === "/index3.html") {

      const six = fs.readFileSync("./public/index3.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(six);
      res.end();
    }

    if(req.url === "/index3.css") {

      const seven = fs.readFileSync("./public/index3.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(seven);
      res.end();
    }

    if(req.url === "/index3.js") {

      const fourty = fs.readFileSync("./public/index3.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.write(fourty);
      res.end();
    }

    if(req.url === "/index4.html") {

      const eight = fs.readFileSync("./public/index4.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(eight);
      res.end();
    }

    if(req.url === "/index4.css") {

      const nine = fs.readFileSync("./public/index4.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(nine);
      res.end();
    }
    if(req.url === "/index4.js") {

      const fifty = fs.readFileSync("./public/index4.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.write(fifty);
      res.end();
    }

    if(req.url === "/index5.html") {

      const ten = fs.readFileSync("./public/index5.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.write(ten);
      res.end();
    }

    if(req.url === "/index5.css") {

      const eleven = fs.readFileSync("./public/index5.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.write(eleven);
      res.end();
    }

    if(req.url === "/index5.js") {

      const twelve = fs.readFileSync("./public/index5.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.write(twelve);
      res.end();
    }



    console.log(req.url)
  }
});

server.listen(8080);