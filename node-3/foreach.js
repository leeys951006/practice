const studentNamesArray = require('./names-data.js');
// # javascript 방식 - 선언형
studentNamesArray.forEach((name) => {
  console.log(name);
});

function na(array) {
   for(let i = 0; i < array.length; i++) {
    let name = array[i];
    console.log(name);
   }
}