document.querySelector(".confirmation").onclick = function () {
    document.querySelector(".pop-up").style.display = "none";
};

let mouseIsHovering = false;
let mouseHeight = 0;

// const body = document.querySelector("body");
// body.addEventListener("mousemove", getCursorHeight(e) {
//     mouseHeight = e.clientY;
// });

const stage = document.querySelector(".stage");
stage.addEventListener("mouseover", function () {
    console.log("mouse is hovering");
    mouseIsHovering = true;
    // throwMissile();
});
stage.addEventListener("mouseout", function () {
    console.log("it aint hovering");
    mouseIsHovering = false;
});

// function throwMissile() {
//     console.log("missile throwing function has been called.");
//     const missiles = document.querySelectorAll(".missile");
//     const firstMissile = document.querySelector("#first");
//     const secondMissile = document.querySelector("#second");
//     const thirdMissile = document.querySelector("#third");
//     while (mouseIsHovering) {
//         missiles.forEach(missile => {
//             missile.style.left = "-50px";
//             missile.style.setProperty("top", mouseHeight + "");
//         });
//         setTimeout(function () {
//             firstMissile.style.left = "100%";
//             firstMissile.style.transition = "1s";
//         }, 1);
//         setTimeout(function () {
//             secondMissile.style.left = "100%";
//             secondMissile.style.transition = "1s";
//         }, 1);
//         setTimeout(function () {
//             thirdMissile.style.left = "100%";
//             thirdMissile.style.transition = "1s";
//         }, 1);
//     }
// }