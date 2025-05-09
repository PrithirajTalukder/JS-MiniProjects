var timer = 60;
var score = 0;
var newHit = 0;




function bubblesMake(){
    
    var clutter = "";

for(i=1; i<211; i++){
    var rn = Math.floor(Math.random() * 10);
   clutter +=  `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;

}


function timerStart(){
   var setInt =  setInterval(function(){
    if (timer > 0){
        timer --;
        document.querySelector("#time").textContent = timer;

    }else{
        clearInterval(setInt);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`
    }
       

    }, 1000)
   
}


function newhitVal(){
    newHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = newHit;
}


function scoreChange(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickedBubble = Number(dets.target.textContent);
    if (clickedBubble === newHit){
        scoreChange();
        bubblesMake();
        newhitVal();
    }
})

bubblesMake();
timerStart();
newhitVal();
