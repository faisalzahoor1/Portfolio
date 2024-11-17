

let about = document.getElementById("about");
let home = document.getElementById("home");
let conatct = document.getElementById("contact");
let body = document.body;


about.addEventListener("click", () => {
    window.location.href = "http://192.168.18.128:3000/about.html";
    
})

home.addEventListener("click", () => {
    window.location.href = "http://192.168.18.128:3000/index.html";
})

let toggle_box = document.querySelector(".toggle_box");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");


toggle_box.addEventListener("click", () => {
    if (checkbox.checked) {
        circle.style.left = "25px";
        body.style.background = "black";
        toggle_box.style.background = "black";
        circle.style.background = "white";
    } else {
        circle.style.left = "0px";
        body.style.background = "rgb(44, 18, 69)";
        toggle_box.style.background = "antiquewhite";
        circle.style.background = "black";
    }
})
