const grid = document.querySelector('.grid');
const startButton = document.querySelector('button');

let boxes = [];
let score = 0;
let level = 1;
let numBoxes = 4;

startButton.addEventListener('click', startGame);

function startGame() {
    // Clear previous boxes
    grid.innerHTML = '';

    // Generate new boxes
    boxes = generateBoxes(numBoxes);
    boxes.forEach(box => grid.appendChild(box));

    // Start timer to hide boxes
    setTimeout(hideBoxes, 1000);
}

function generateBoxes(num) {
    let boxes = [];
    for (let i = 0; i < num * num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('click', handleBoxClick);
        boxes.push(box);
    }
    return boxes;
}

function hideBoxes() {
    boxes.forEach(box => box.classList.remove('clicked'));
}

function handleBoxClick() {
    const boxIndex = boxes.indexOf(this);
    if (boxIndex === level - 1) {
        // Correct box clicked
        this.classList.add('clicked');
        score++;
        level++;
        numBoxes++;
        setTimeout(startGame, 1000);
    } else {
        // Wrong box clicked
        alert('Wrong box clicked. Game over!');
        score = 0;
        level = 1;
        numBoxes = 4;
        startGame();
    }
}
