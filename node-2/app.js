let fs = require('fs');

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  
</head>
  <body>
    <h1>server에 html 만들기</h1>
  </body>
</html>`;

fs.writeFile('server.html',html,function(){});
