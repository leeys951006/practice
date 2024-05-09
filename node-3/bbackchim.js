function work(string) {
  try {
    if(typeof(string) === "string") {
      console.log(string);
    } 

  } catch(error) {
    console.error(error, '내가 원하는게 아니야');
    
  }
  
}
  


work("안녕");
work(1);
work(true);
work({name: "이연승"});