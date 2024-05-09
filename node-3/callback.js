// function a(a,b) {
//   return a + b;
// }

function b(a,b,callback) {
  callback(a,b); // *아규먼트를 전달한다 -> 인수인계한다. -> 미래의 함수에게 짬 처리한다. 
}

b(1,2,function(a,b) {
  console.log(a*b);
  console.log(typeof(a*b));
});

// function add(a,b) {
//   return a+b;
// }

// console.log(b(1,2,function(a,b) {
//   console.log(a+b);
// }));


// b(1,2, function(a,b){
//   console.log(a + b); 
// }) // *호출 할때마다 정의해줘야하므로 재활용면에서는 안좋음