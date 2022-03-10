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
// const saveBtn = document.getElementById('save')

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
  location.reload();
  sessionStorage.clear()
})
// 2022 03 10

let storeInput01 = document.getElementById("store_input01");
let storeInput02 = document.getElementById("store_input02");
let storeInput03 = document.getElementById("store_input03");
let storeInput04 = document.getElementById("store_input04");
let storeInput05 = document.getElementById("store_input05");

let siStoreBtn01 = document.getElementById("si_store01");
let siStoreBtn02 = document.getElementById("si_store02");
let siStoreBtn03 = document.getElementById("si_store03");
let siStoreBtn04 = document.getElementById("si_store04");
let siStoreBtn05 = document.getElementById("si_store05");

let siLoadBtn01 = document.getElementById('si_load01');
let siLoadBtn02 = document.getElementById('si_load02');
let siLoadBtn03 = document.getElementById('si_load03');
let siLoadBtn04 = document.getElementById('si_load04');
let siLoadBtn05 = document.getElementById('si_load05');

let a = winballs.join()
let b = winballs.join(', ')

let storeInputValue = storeInput01.value;

// 저장하기 버튼 클릭
siStoreBtn01.addEventListener('click', function () {
  storeInput01.setAttribute('value', b + ', ' + bonus)
  sessionStorage.setItem('01', storeInput01.value)
})
siStoreBtn02.addEventListener('click', function () {
  storeInput02.setAttribute('value', b + ' ' + bonus)
  sessionStorage.setItem('02', storeInput02.value)
})
siStoreBtn03.addEventListener('click', function () {
  storeInput03.setAttribute('value', b + ' ' + bonus)
  sessionStorage.setItem('03', storeInput03.value)
})
siStoreBtn04.addEventListener('click', function () {
  storeInput04.setAttribute('value', b + ' ' + bonus)
  sessionStorage.setItem('04', storeInput04.value)
})
siStoreBtn05.addEventListener('click', function () {
  storeInput05.setAttribute('value', b + ' ' + bonus)
  sessionStorage.setItem('05', storeInput05.value)
})

// 불러오기 버튼 클릭
siLoadBtn01.addEventListener('click', function () {
  let se01 = sessionStorage.getItem('01');
  storeInput01.setAttribute('value', se01);
})
siLoadBtn02.addEventListener('click', function () {
  let se02 = sessionStorage.getItem('02');
  storeInput02.setAttribute('value', se02);
})
siLoadBtn03.addEventListener('click', function () {
  let se03 = sessionStorage.getItem('03');
  storeInput03.setAttribute('value', se03);
})
siLoadBtn04.addEventListener('click', function () {
  let se04 = sessionStorage.getItem('04');
  storeInput04.setAttribute('value', se04);
})
siLoadBtn05.addEventListener('click', function () {
  let se05 = sessionStorage.getItem('05');
  storeInput05.setAttribute('value', se05);
})

// 2022 03 10 end