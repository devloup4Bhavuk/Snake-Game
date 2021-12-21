import Snake from "./snake.js";
import Food from "./food.js";
import pen,{canvas} from "./canvas.js";

init()

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
        alert("Game Over");
        clearInterval(interval)
        return
    }
    if(myFood.foodEaten(mySnake.body[0].x,mySnake.body[0].y)){
        myFood.updateFood()
        myFood.generatFood()
    }
    pen.clearRect(0,0,canvas.height,canvas.width)
    mySnake.updatePosition();
    myFood.generatFood()
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