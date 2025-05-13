var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

var check = 0;


addFriend.addEventListener("click", function(){

    if(check == 0){
    istatus.innerHTML = "Friends"
    addFriend.innerHTML = "Remove Friend"
    addFriend.style.color = "white"
     addFriend.style.backgroundColor = "red"
    istatus.style.color = "green"
    check = 1
        
    }else{
    istatus.innerHTML = "Stranger"
    addFriend.innerHTML = "Add Friend"
    addFriend.style.color = "white"
    addFriend.style.backgroundColor = "blue"
    istatus.style.color = "red"
    check = 0

    }
    
})

