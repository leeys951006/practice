const fs = require('fs');
const nowdate = require("./nowdate.js");

// console.log(nowdate());




let convertJson = JSON.stringify(htmlMarkup, null, 2);
  
const test = fs.writeFileSync(`${nowdate()}-htmlMarkup.json`, convertJson,"utf-8", function(error){
  if(error){
    console.log("파일 만드는 것 에러");
    console.log("에러내용 :", error);
  }
  console.log("잘 저장됨");
});