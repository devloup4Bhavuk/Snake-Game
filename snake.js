// import pen from "./canvas.js";
import pen,{canvas} from "./canvas.js";

class Snake{
    constructor(){
        this.X = 4;
        this.Y = 0;
        this.color = "#e63946";
        this.body = [];
        this.direction = {
            x:1,
            y:0
        }
        this.cellSize = canvas.width/15 || canvas.height/15
    }
    addBody(){
        for(var i=4;i>=0;i--){
            this.body[i] = {
                x:4-i,
                y:0
            }
        }
    }
    drawBody(){
        this.body.forEach(item=>{
            pen.fillStyle = this.color;
            pen.fillRect(item.x*this.cellSize,item.y*this.cellSize,this.cellSize-5,this.cellSize-5);
        })
    }
    updatePosition(foodEaten=false){
        if(!foodEaten){
            this.body.pop();
        }
        var newBody = {
            x: this.body[0].x + this.direction.x,
            y: this.body[0].y + this.direction.y
        }
        this.body.unshift(newBody);
        this.X = Math.floor(this.body[0].x*this.cellSize);
        this.Y = Math.floor(this.body[0].y*this.cellSize);
        this.drawBody()
    }
    updateDirection(key){
        if(key === "ArrowRight"){
            this.direction.x = 1;
            this.direction.y = 0;
        }
        else if(key === "ArrowLeft"){
            this.direction.x = -1;
            this.direction.y = 0;
        }
        else if(key === "ArrowUp"){
            this.direction.x = 0;
            this.direction.y = -1;
        }
        else if(key === "ArrowDown"){
            this.direction.x = 0;
            this.direction.y = 1;
        }
    }

}

export default Snake;