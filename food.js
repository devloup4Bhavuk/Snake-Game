import pen,{canvas} from "./canvas.js"

class Food{
    constructor(){
        this.X = Math.floor(Math.random()*14)
        this.Y = Math.floor(Math.random()*14)
        this.color = "#457b9d"
        this.cellSize = canvas.width/15 || canvas.height/15
    }

    generatFood(){
        pen.fillStyle = this.color
        pen.fillRect(this.X*this.cellSize,this.Y*this.cellSize,this.cellSize-10,this.cellSize-10)
    }
    updateFood(){
        this.X = Math.floor(Math.random()*14)
        this.Y = Math.floor(Math.random()*14)
    }

    foodEaten(x,y){
        if(this.X === x && this.Y === y)
            return true
        return false
    }
}

export default Food