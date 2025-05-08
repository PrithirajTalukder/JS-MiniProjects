var timer = 60;
var score = 0;




function bubblesMake(){
    
    var clutter = "";

for(i=1; i<168; i++){
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
    }
       

    }, 1000)
   
}


function newhitVal(){
    var newHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = newHit;
}


function scoreChange(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

bubblesMake();
timerStart();
newhitVal();
scoreChange();