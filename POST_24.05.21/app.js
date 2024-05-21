const fs = require('fs');
// const LOL = require("./lol.js");

// console.log(LOL());


const best = {
  Top : "크산테",
  Jug : "녹턴",
  Mid : "오리아나",
  Ad : "시비르",
  Sup : "노틸러스"
}


let lolJSON = JSON.stringify(best,null,1);
  
const test = fs.writeFileSync(`${best}.json`, lolJSON,"utf-8", function(error){
  if(error){
    console.log("파일 만드는 것 에러");
    console.log("에러내용 :", error);
  }
  console.log("잘 저장됨");
});