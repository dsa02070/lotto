const candidate = Array(45).fill().map(function (el, i) {
  return i + 1;
})
const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열의 값을 꺼내서
  shuffle.push(value);
}
const winballs = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6]

console.log(shuffle)
console.log(winballs)
console.log(bonus)

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');
const bodyElem = document.querySelector('body');
const startBtn = document.getElementById('start');
const reloadBtn = document.getElementById('reload');
const saveBtn = document.getElementById('save')

const showBall = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.classList.add('ball');
  $ball.textContent = number;
  $target.append($ball);

  // 볼의 숫자
  let ballText = $ball.textContent;
  if (ballText <= 10) {
    $ball.style.backgroundColor = 'Beige';
  } else if (ballText <= 20) {
    $ball.style.backgroundColor = 'skyblue';
  } else if (ballText <= 30) {
    $ball.style.backgroundColor = 'CadetBlue';
  } else if (ballText <= 40) {
    $ball.style.backgroundColor = 'GreenYellow';
  } else {
    $ball.style.backgroundColor = 'IndianRed';
  }
}

// 시간 설정 함수
const setTime = (a, b, c) => {
  setTimeout(() => {
    showBall(a, b)
  }, c);
}

// 자식태그 삭제 함수
const childNodeDelete = () => {
  // 당첨번호 자식태그들 전부삭제
  while ($result.hasChildNodes()) {
    $result.removeChild($result.firstChild)
  }
  // 보너스번호 자식태그 삭제
  $bonus.removeChild($bonus.firstChild)
}


// 시작 버튼을 누르면 당첨번호가 나온다.
startBtn.addEventListener('click', function (e) {
  // 자식요소 존재 여부 확인
  if ($result.hasChildNodes() == false) {
    // 당첨번호
    for (let i = 0; i < 6; i++) {
      setTime(winballs[i], $result, (i + 1) * 300)
    }
    // 보너스번호
    setTime(bonus, $bonus, 2100)
    // 만약에 보너스번호 자식태그가 1개 이상 일 때
  } else if ($bonus.childElementCount >= 1) {
    childNodeDelete()
    location.reload();
  }
  console.log($result.hasChildNodes())
})

// 초기화 버튼
reloadBtn.addEventListener('click', function () {
  // 만약에 보너스번호 자식태그가 1개일 때
  if ($bonus.childElementCount >= 1) {
    childNodeDelete()
    location.reload();
  }
})


// 저장 버튼
saveBtn.addEventListener('click', function () {
  // if ($bonus.childElementCount >= 1) {
  //   for (let i = 0; i < 6; i++) {
  //     showBall(winballs[i], history)
  //   }
  // }
  if ($bonus.childElementCount >= 1) {
    sessionStorage.setItem("key", JSON.stringify(winballs))
    const winballsJson = JSON.stringify(winballs)
    console.log(winballsJson);
  } else {
    alert('번호를 먼저 생성해주세요.')
  }
})

let history = document.querySelector('.history li')
let printBtn = document.getElementById('print');
// 출력 버튼
printBtn.addEventListener('click', function () {

  var output = sessionStorage.getItem("key");
  var arr = JSON.parse(output);
  console.log(arr)

  for (let i = 0; i < 6; i++) {
    showBall(arr[i], history)
  }
  const $ball2 = document.createElement('br');
  history.append($ball2)
})

function jsonNumber() {
  fetch("./number.json")
    .then((response) => response.json())
    .then((json) => console.log(json[0].result));
}
jsonNumber()