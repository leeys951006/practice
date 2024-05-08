const http = require('node:http');
// console.log(http);
// console.table(http);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
    `<html>
    <body>
      <h1>hello</h1>
    </body>
  </html>`
);
});

  // ? 요청과 응답을 어떻게 처리 할 것인지? 
  // * 무슨기능을 넣을 것인지? 
  // * 문서를 보낼까?
  


server.listen(8000);