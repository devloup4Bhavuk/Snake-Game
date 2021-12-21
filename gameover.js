const gameover = document.getElementById("gameover"),
      score    = document.getElementById("score")

function display(x){
    gameover.classList.remove("hidden");
    score.innerText = x;
    return
}

export default display