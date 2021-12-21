import Snake from "./snake.js";
import Food from "./food.js";
import pen,{canvas} from "./canvas.js";
import display from "./gameover.js";
init()

let score = 0;

const mySnake = new Snake()
mySnake.addBody()
mySnake.drawBody()

const myFood = new Food()
myFood.generatFood();


const interval = setInterval(() => {
    gameloop();
}, 150);

function init(){
    canvas.height = window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight;
    canvas.width = window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight;
}

function gameloop(){
    if(gameOver()){
        display(score);
        clearInterval(interval)
        return
    }
    if(myFood.foodEaten(mySnake.body[0].x,mySnake.body[0].y)){
        myFood.updateFood()
        myFood.generatFood()
        score++;
        pen.clearRect(0,0,canvas.height,canvas.width)
        mySnake.updatePosition(true);
        myFood.generatFood()
    }
    else{
        pen.clearRect(0,0,canvas.height,canvas.width)
        mySnake.updatePosition();
        myFood.generatFood()
    }
}

function gameOver(){
    if(mySnake.X >= canvas.width || mySnake.X < 0 || mySnake.Y >= canvas.height || mySnake.Y < 0){
        return true
    }
}

window.addEventListener("resize",function(){
    canvas.height = window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight;
    canvas.width = window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight;
    init()
    this.clearInterval(interval);
})

document.addEventListener("keydown",e=>{
    if(e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight"){
        mySnake.updateDirection(e.key)
    }
})