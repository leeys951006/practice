
let root = document.getElementById('root');
let main = document.getElementById('main');
let button = document.getElementById('button');


// ?  setInterval("반복실행", "실행간격");

let box= 0;


button.addEventListener('click', function(){
  let timer = setInterval(() => {
    console.log('1초' + box);
    box++;
    if(box < 100) {
      main.style.left = box + 'px'
    } else if (box > 100) {
      main.style.top = 100 - box + 'px'
    }
    else{
      clearInterval(timer);
    }
  }, 10);
})


let box2 = 100;

button.addEventListener('click', function(){
  let timer = setInterval(() => {
    console.log('1초' + box2);
    box2--;
    if(box2 < 100) {
      main.style.right = box2 + 'px'
    } 
    else{
      clearInterval(timer);
    }
  }, 10);
})



