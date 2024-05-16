const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');

const server = http.createServer((request, response) => {
  if(request.method === "GET") {
    console.log("요청 URL 검사 :", request.url);
    if(request.url === "/") {

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      const htmlData = fs.readFileSync("./public/index.html", "utf8");  
      response.write(htmlData);
      response.end();
    }
    if(request.url.startsWith("/test")) {
      // * 만일 request url의 첫 시작이 /test라면 
      const inputData = request.url.split("?")[1];
      //  * inputData에 할당해줘 ? 기준으로 잘라주고 그 뒷부분을 
      // * 아래 예시로 확인해 보면 http://localhost:8080/test 까지가 [0] test2&test3가 [1]

      // ex.
      // http://localhost:8080/test?test2&test3
      const data = qs.decode(inputData);
      // * decode(inputData) = inputData 코드를 해석해줘 
      console.log(data);
    }
  }
});

const PORT = 8080;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
})