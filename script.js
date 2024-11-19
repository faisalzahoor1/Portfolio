let about = document.getElementById("about");
let home = document.getElementById("home");
let projects = document.getElementById("project");
let body = document.body;
let toggle_box = document.querySelector(".toggle_box");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");
let savedMode = '';
let newMode = '';

home.addEventListener("click", () => {
    window.location.href = "http://192.168.18.128:3000/index.html";
})
about.addEventListener("click", () => {
    window.location.href = "http://192.168.18.128:3000/about.html";
})
projects.addEventListener("click", () => {
    window.location.href = "http://192.168.18.128:3000/project.html";
})



function setBackgroundColor(mode) {
    if (mode === 'black') {
        body.style.background = "black";
        if (toggle_box && circle) {
            toggle_box.style.background = "black";
            circle.style.background = "white";
            circle.style.left = "25px";
        }
    } else {
        body.style.background = "rgb(44, 18, 69)";
        if (toggle_box && circle) {
            toggle_box.style.background = "antiquewhite";
            circle.style.background = "black";
            circle.style.left = "0px";
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    savedMode = localStorage.getItem('colorMode');
    setBackgroundColor(savedMode);
});


toggle_box.addEventListener("click", () => {
    newMode = checkbox.checked ? 'black' : 'rgb(44, 18, 69)';
    setBackgroundColor(newMode);
    localStorage.setItem('colorMode', newMode);
});

const wheel = document.querySelector(".wheel");
const nodes = document.querySelectorAll(".node");

nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        wheel.style.animationPlayState = 'paused';
        nodes.forEach(node => {
            node.style.animationPlayState = 'paused';
        });
    });

    node.addEventListener('mouseleave', () => {
        wheel.style.animationPlayState = 'running';
        nodes.forEach(node => {
            node.style.animationPlayState = 'running';
        });
    });
});
