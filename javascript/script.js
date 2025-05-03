//include the 2d libeerary
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");


console.log(ctx); 


const scale = 20;
const rows = canvas.height / scale;

const colums = canvas.width / scale;

let score = 0;
let snake = [];

snake[0]={
    x: Math.floor(Math.random() * colums)* scale,
    y:Math.floor(Math.random() * rows)* scale,
};

let food={
    x: Math.floor(Math.random() * colums)* scale,
    y:Math.floor(Math.random() * rows)* scale,
};


let d="right";

document.onkeydown = direction;

function direction(event){
    let key = event.keyCode;
   
 if (key == 37 && d !="right"){
      d="left"    
   }   else if(key == 38 && d !="down"){
      d="up"
    }else if (key == 39 && d !="left"){
      d="right"
   }else if (key == 40 && d !="up"){
      d="down"
   }
            
                               
}

let playGame = setInterval(draw, 200);

function draw(){
 ctx.clearRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < snake.length; i++){

ctx.fillStyle = "#fff";
ctx.strokeStyle = "red";
ctx.fillRect(snake[i].x, snake[i].y, scale, scale); 
ctx.strokeRect(snake[i].x, snake[i].y, scale, scale); 
}
{
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "blue";
    ctx.fillRect(food.x, food.y, scale, scale); 
    ctx.strokeRect(food.x,food.y, scale, scale);  
}
let snakeX = snake[0].x;
let snakeY = snake[0].y;


 // spacifiy the diraction.

if(d == "left") snakeX -= scale;
if(d == "right") snakeX += scale;
if(d == "up") snakeY -= scale;
if(d == "down") snakeY += scale;
   if(snakeX > canvas.width){
    snakeX = 0;
   }
   if(snakeX > canvas.hight){
    snakeY = 0;
   }
   if(snakeX <0){
    snakeX= canvas.width;
   }
   if(snakeX <0){
    snakeY= canvas.height;
   }
let newHead = {
    x: snakeX,
    y: snakeY,
};

if(snakeX ==food.x && snakeY == food.y){
    score++;
    food={
        x: Math.floor(Math.random() * colums)* scale,
        y:Math.floor(Math.random() * rows)* scale,
    };
} else {
    snake.pop();
}
if(eatSelf(newHead, snake)){
    clearInterval(playGame);
}
snake.unshift(newHead);
}

function eatSelf(Head, array){
    for(let i= 0; i< array.length; i++){
        if(Head.x == array[i].x && Head.y == array[i].y){
            return true;
        }
    }
    return false;
}