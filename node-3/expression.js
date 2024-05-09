// const a = function () {
//   console.log("hello");
// }
// a();

// 위에 방식을 조금 더 줄이고 싶을떄 아래의 방식을 사용

// const b = () => console.log('hello')


// 더 극단적으로 줄일 수 있음.
const a = function (first) {
  console.log(first);
}
a();

const b = first => console.log(first);
b();