const lunchMenus = [
  ["주니어와퍼","몬스터와퍼","스테커버거","콰트로치즈","와퍼"],
  ["쉑쉑버거","핫도그","밀크쉐이크","스모크쉑버거"],
  "순두부찌개",
  ["치킨마요","참치마요","무슨마요","도련님도시락"],
  ["짜장면","짬뽕","볶음밥","잡채밥","유린기"],
  "쭈꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "돈까스",
  "쌀국수",
  "분식",
  "칼국수",
  "콩나물밥",
]


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
// 두 값 사이의 정수인 난수를 생성함. 반환값은 min(단, min이 정수가 아니면 min보다 큰 최소의 정수)보다 크거나 같으며, max보다 작음


// getRandomInt(0, array.length);
function lunchSelector(array) {
  // 함수이며 이름은 lunchSelector이고 매개변수는 array이다. 
  const firstGetRandomIndex = getRandomInt(0, array.length);
  // firstGetRandomIndex라는 변수를 선언 후 getRandomInt(0, array.length)의 값을 할당
  for (let i = 0; i < array.length; i++) {
    // 반복해줘 i의 기본값은 0이고 i는 증가하며 i가 array.length보다 작을때 {}를 실행해줘
    if (Array.isArray(array[firstGetRandomIndex])) {
      // 만일 Array.isArray(array[firstGetRandomIndex])가 true면 {}를 실행해줘
      const randomIndex = getRandomInt(0, array[i].length);
      // randomIndex에 getRandomInt(0, array[i].length)를 할당
      for (let j = 0; j < array[i].length; j++) {
        // 반복해줘 j의 기본값은 0이고 j는 증가하며 j가 array[i].length보다 작을때 {}를 실행해줘 
        return array[firstGetRandomIndex][randomIndex];
      }
      return array[randomIndex];
    }
  }
  return array[firstGetRandomIndex];
}
console.log(lunchSelector(lunchMenus));

