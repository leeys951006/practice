const fs = require('fs');
const nowdate = require("./nowdate.js");

// console.log(nowdate());


const testJson = {
  name: "이연승dfadfafasfsadfasdfasfsadfsfa",
  age: 301131151315315313153351,
  city: "대전dafsdfsdfasdfdasfsfsdfdsfsafsafdsaafdasfdsfdasfadsfadfadfsd",
}

let convertJson = JSON.stringify(testJson,null,2);
  
const test = fs.writeFileSync(`${nowdate()}.json`, convertJson,"utf-8", function(error){
  if(error){
    console.log("파일 만드는 것 에러");
    console.log("에러내용 :", error);
  }
  console.log("잘 저장됨");
});