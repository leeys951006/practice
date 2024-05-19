const url = "https://www.kia.com/"

const carUrl = [
  "/content/dam/kwp/kr/ko/vehicles/represent/krtm138/ray-ev_q_eu3.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krsg078/niro-ev_q_swp.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krdp079/niro-plus_q_m7g.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krcv177/ev6_q_glb.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krcv173/ev6-gt_q_klm.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krmv107/ev9_q_ism.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krja130/morning_q_a2g.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krtm148/ray_q_m9y.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krdb132/k3_q_m4b.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krdb133/k3-gt_q_cr5.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krdl145/k5_q_c7s.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krgl141/k8_q_klg.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krjr174/k9_q_d9b.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krsu105/seltos_q_swp.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krsg077/niro-hybrid_q_cge.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krnq131/sportage_q_swp.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krmq135/sorento_q_bn4.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krjs129/mohave_q_abp.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krkp175/carnival_q_isg.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krkp176/carnival-hi-limousine_q_abp.png",
  
]

const names = [
  "레이 EV",
  "니로 EV",
  "니로 플러스",
  "EV6",
  "EV6 GT",
  "EV9",
  "모닝",
  "레이",
  "K3",
  "K3-GT",
  "K5",
  "K8",
  "K9",
  "셀토스",
  "니로",
  "스포티지",
  "쏘렌토",
  "모하비",
  "카니발",
  "카니발 하이리무진"  
]

const root = document.getElementById('root')
const h1 = document.createElement('h1')
const button = document.getElementById('button')
const img = new Image(800,400)
root.appendChild(img)
root.appendChild(h1)

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function kia(carurl, names) {
  const random = getRandomInt(0, 20)
  for(let i = 0; i < 20; i++) {
    if(i === random) {
      img.src = url + carurl[i]
      h1.textContent = names[i]
    }
  }
}

button.addEventListener('click', function() {
  kia(carUrl, names)
})