
// Navbar //


let navbar = document.querySelector("ul");
let bars = document.getElementById("bar");
let xmarks = document.getElementById("xmark");

function OpenBar() {
    navbar.style.transform = "translateY(0px)"
    xmarks.style.visibility = "visible"
    bars.style.visibility = "hidden"

}

function CloseBar() {
    navbar.style.transform = "translateY(-200px)"
    xmarks.style.visibility = "hidden"
    bars.style.visibility = "visible"
}






// Navbar Closed //













// Slider //


const slider = document.querySelector(".slider")
const slideFirst = document.querySelector(".slide1")
const slideSecond = document.querySelector(".slide2")
const firstCircle = document.getElementById("circleFirst");
const secondCircle = document.getElementById("circleSecond");





function prevBtn() {
    slideFirst.style.transform = "translateX(50%)"
    slideSecond.style.transform = "translateX(80%)"
    firstCircle.style.fontSize = "9px";
    firstCircle.style.background = "white";
    secondCircle.style.fontSize = "9px";
    secondCircle.style.background = "transparent";
}

function nextBtn() {
    slideFirst.style.transform = "translateX(-80%)"
    slideSecond.style.transform = "translateX(-50%)"
    firstCircle.style.fontSize = "9px";
    firstCircle.style.background = " transparent";
    firstCircle.style.borderRadius = "50%";
    secondCircle.style.fontSize = "9px";
    secondCircle.style.background = "white";
}


function fisrtCic() {
    slideFirst.style.transform = "translateX(50%)"
    slideSecond.style.transform = "translateX(80%)"
    firstCircle.style.fontSize = "9px";
    firstCircle.style.background = "white";
    secondCircle.style.fontSize = "9px";
    secondCircle.style.background = "transparent";
}


function secondCic() {
    slideFirst.style.transform = "translateX(-80%)"
    slideSecond.style.transform = "translateX(-50%)"
    firstCircle.style.fontSize = "9px";
    firstCircle.style.background = " transparent";
    firstCircle.style.borderRadius = "50%";
    secondCircle.style.fontSize = "9px";
    secondCircle.style.background = "white";

}


// Slider Closed //
