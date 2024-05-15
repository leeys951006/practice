let carimg = document.getElementById('carimg')
let selec = document.getElementById('selec')
let selecbutton = document.createElement('button')
let selecText = document.createTextNode('당신이 필요한 차는 뭘까요?')
let blank = document.getElementById('blank')

selec.appendChild(selecbutton);
selecbutton.appendChild(selecText);

carimg.style.marginTop = "100px"
selecbutton.style.marginTop = "50px"
selecbutton.style.marginBottom = "50px"