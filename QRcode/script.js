var qrtext = document.getElementById("qrtext");
var img = document.getElementById("img");
var generate = document.getElementById("generate")
var imgdiv = document.getElementById("imgdiv")

function generateQr(){

    if(qrtext.value.length > 0){

        img.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;

imgdiv.classList.add("show-img");

    } else{
        qrtext.classList.add("error")

        setTimeout(() =>{
            qrtext.classList.add("error")
        },1000);
    }


}