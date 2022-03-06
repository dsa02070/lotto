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
const bodyElem = document.querySelector('body')


const showBall = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.classList.add('ball');
    $ball.textContent = number;
    $target.append($ball);
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



const setTime = (a, b, c) => {
    setTimeout(() => {
        showBall(a, b)
    }, c);
}



const startBtn = document.getElementById('start');
const reloadBtn = document.getElementById('reload');

startBtn.addEventListener('click', function () {
    for (let i = 0; i < 6; i++) {
        setTime(winballs[i], $result, (i + 1) * 500)
    }
    setTime(bonus, $bonus, 3500)
}, {
    once: true
})
console.log($result.value)

reloadBtn.addEventListener('click', function () {
    location.reload()
})