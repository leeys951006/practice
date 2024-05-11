let fs = require('fs');
let http = require('http');
let html = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pokemon</title>
 
</head>
  <body>
    <div id="root"></div>
    <script src="pokemon.js"></script>
  </body>
</html>
`;

fs.writeFile('pokemon.html', html, function (){});

http.createServer((req,res) => {
  if(req.url == "/") {
    let path = "pokemon.html"

    fs.readFile(path, (err,data) => {
      
    })
  }
})