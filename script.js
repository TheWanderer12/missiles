let mouseIsHovering = false;
let mouseHeight = 0;

const body = document.querySelector("body");
body.addEventListener("mousemove", getCursorHeight(e));

const confirmationButton = document.querySelector(".confirmation");
confirmationButton.addEventListener("click", closePopUp());

const stage = document.querySelector(".stage");
stage.addEventListener("mouseover", changeHoverToTrue());
stage.addEventListener("mouseout", changeHoverToFalse());

function closePopUp() {
    const popUp = document.querySelector(".pop-up");
    popUp.style.display = "none";
}

function getCursorHeight(e) {
    mouseHeight = e.clientY;
}

function changeHoverToTrue() {
    mouseIsHovering = true;
    throwMissile();
}

function changeHoverToFalse() {
    mouseIsHovering = false;
}

function throwMissile() {
    console.log("missile throwing function has been called.");
    const missiles = document.querySelectorAll(".missile");
    const firstMissile = document.querySelector("#first");
    const secondMissile = document.querySelector("#second");
    const thirdMissile = document.querySelector("#third");
    while (mouseIsHovering) {
        missiles.forEach(missile => {
            missile.style.top = mouseHeight;
        });
        firstMissile.style.left = "100%";
    }
}