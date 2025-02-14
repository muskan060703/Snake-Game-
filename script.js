// const startBtn = document.getElementById("startBtn");
// const baord = document.getElementById("board");
// let snake;
// let food;
// let speed = 50;
// let numberOfCols = 16;
// let numberOfRows = 16;
// let gameStart = false;
// let direction;

// let isSnakeCreated = false;
// startBtn.addEventListener("click",()=>{
//     if(!isSnakeCreated)
//     {
//     createSnake();
//     }
//     else
//     {
//         alert("started game already");
//     }
// })


// function createSnake()
// {
//     startBtn.disabled = true;
//     isSnakeCreated = true;
//     gameStart = true;
//     snake = document.createElement("div");
//     snake.id = "snake";
//     baord.appendChild(snake);
//     createFood();
//     moveSnake();
// }

// function createFood() 
// {
//     food = document.createElement("div");
//     food.id = "food";
//     baord.appendChild(food);
// }


// function randomNumberGenerator()
// {

// }

// function moveSnake() {
//     let positions = snake.getBoundingClientRect();
//     console.log(positions);
    
    

//     if (direction === "up") snake.style.top = 
//     snake.style.transform = `translateY((positions.height - speed) + "px")`;
//     if (direction === "down") snake.style.top = (positions.height + speed) + "px";
//     if (direction === "left") snake.style.left = (positions.width - speed) + "px";
//     if (direction === "right") snake.style.left = (positions.width + speed) + "px";
// }

// document.addEventListener("keydown",(event)=>{
//     switch(event.key){
//         case "ArrowUp":
//             // console.log("Up key pressed");
//             // 
//             direction = "up";
//             moveSnake();
//             break;
//         case "ArrowDown":
//             // console.log("Down key pressed");
//             // snake.style.transform= "translateY(50px)";
//             direction = "down";
//             moveSnake();
//             break;
//         case "ArrowLeft" :
//             // console.log("Left key pressed");
//             // snake.style.transform= "translateX(-50px)";
//             direction = "left";
//             moveSnake();
//             break;
//         case "ArrowRight" :
//             // console.log("Right key pressed");
//             // snake.style.transform= `translateX(50px)`;
//         direction = "right";
//         moveSnake();
//             break;
//     }
// })


const startBtn = document.getElementById("startBtn");
const board = document.getElementById("board"); 
let snake;
let food;
let speed = 50;
let numberOfCols = 16;
let numberOfRows = 16;
let gameStart = false;
let direction;
let isSnakeCreated = false;

startBtn.addEventListener("click", () => {
    if (!isSnakeCreated) {
        createSnake();
    } else {
        alert("Game already started");
    }
});

function createSnake() {
    startBtn.disabled = true;
    isSnakeCreated = true;
    gameStart = true;
    
    snake = document.createElement("div");
    snake.id = "snake";
    snake.style.position = "absolute"; 
    snake.style.top = "50px"; 
    snake.style.left = "50px"; 
    board.appendChild(snake);

    createFood();
}

function createFood() {
    food = document.createElement("div");
    food.id = "food";
    food.style.position = "absolute"; 
    food.style.top = `${randomNumberGenerator() * speed}px`; 
    food.style.left = `${randomNumberGenerator() * speed}px`; 
    board.appendChild(food);
}

function randomNumberGenerator() {
    return Math.floor(Math.random() * numberOfCols);
}

function moveSnake() {
    if (!gameStart) return; 
    checkSnakePosition();
    let currentTop = parseInt(snake.style.top);
    let currentLeft = parseInt(snake.style.left);

    if (direction === "up") snake.style.top = (currentTop - speed) + "px";
    if (direction === "down") snake.style.top = (currentTop + speed) + "px";
    if (direction === "left") snake.style.left = (currentLeft - speed) + "px";
    if (direction === "right") snake.style.left = (currentLeft + speed) + "px";
}

function checkSnakePosition() {
let snakePositions = snake.getBoundingClientRect();
let boardPositions = board.getBoundingClientRect();
console.log("check snake : ");
console.log("Snake Positions : " , snakePositions);
console.log("Board Positions : " , boardPositions);
if(snakePositions.left <= boardPositions.left)
    alert("Game over")
if(snakePositions.top <= boardPositions.top)
    alert("Game Over");
if(snakePositions.right >= boardPositions.right)
    alert("game over")
if(snakePositions.bottom >= boardPositions.bottom)
    alert("game over")


}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            direction = "up";
            moveSnake();
            break;
        case "ArrowDown":
            direction = "down";
            moveSnake();
            break;
        case "ArrowLeft":
            direction = "left";
            moveSnake();
            break;
        case "ArrowRight":
            direction = "right";
            moveSnake();
            break;
    }
});

