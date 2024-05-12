//* 서버 Url
let url = "http://localhost:3000";


// 포켓몬 이미지, 선택 버튼 요소
let root = document.getElementById('root')
let pokemonimage = document.createElement('h1')
root.appendChild(pokemonimage)
let selecbutton = document.createElement('button')
root.appendChild(selecbutton)
let selecword = document.createTextNode('당신의 포켓몬은 뭘까~요? 피피카츄~!')
selecbutton.appendChild(selecword)



// //! async, await 방식
// let request = async function(){

//   const res = await fetch(url + "/data.json", {method : "GET"});

//   const data = await res.json();


//   const getData = pokemonSelector(data);
//   let PText = document.createTextNode(getData);
//   pokemonimage.appendChild(PText)
  
// }


//! then, Promise 방식?
let requestL1 = fetch(url + "/data.json", {
  method : "GET"
}
)

.then(res => res.json())

.then(data => {
  //TODO 객체로 변환된 JSON 데이터를 이용해주시면되요.
  //* 예시
  const getData = pokemonSelector(data);
  let PText = document.createTextNode(getData);
  pokemonimage.appendChild(PText);

}); 

function pokemonSelector(data) {
  
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const firstGetRandomIndex = getRandomInt(0, data.length);

  for (let i = 0; i < data.length; i++) {
    
    if (Array.isArray(data[firstGetRandomIndex]) === true) {
     
    }
  }
  return data[firstGetRandomIndex];
}


selecbutton.addEventListener('click',function pokemonSelector(data){
});









// function pokemonSelector(data) {
  
//   function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
//   }

//   const firstGetRandomIndex = getRandomInt(0, data.length);

//   for (let i = 0; i < data.length; i++) {
    
    
//     if (Array.isArray(data[firstGetRandomIndex]) === true) {
//       const randomIndex = getRandomInt(0, data[i].length);

//       for (let j = 0; j < data[i].length; j++) {
//         return data[firstGetRandomIndex][randomIndex];
//       }
//     }
//   }
//   return data[firstGetRandomIndex];
// }

// selecbutton.addEventListener("click",function(){})