const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  for(let i=0; i<pokemonData.length; i++) {
    console.log(i + 1 + "포켓몬스터 번호");
    if(answer === pokemonData[i]) {
      console.log("포켓몬스터 이름이 존재합니다.");
      readLine.close();
      break;
    } else {
      console.log("포켓몬스터 이름이 존재하지 않습니다.")
      readLine.close();
    }
  }
});


