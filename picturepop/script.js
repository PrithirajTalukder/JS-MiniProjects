function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

var add = document.querySelector("#center")
add.addEventListener("mousemove", throttle((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px'

    var img = document.createElement("img");
    img.setAttribute("src", "dg.jpg");
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        duration: .6,
        ease: Power1,
    })

      gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2,
    })

    setTimeout(function(){
        div.remove();
    }, 2000)

}, 400));