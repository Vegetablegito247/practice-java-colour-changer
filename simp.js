const colors = ['red', 'green', 'brown', '#ffd700', '#0000ff', 'rgb(255, 127, 80)'];
let btn = document.getElementById('btn');
let color = document.querySelector('.colour');

btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};