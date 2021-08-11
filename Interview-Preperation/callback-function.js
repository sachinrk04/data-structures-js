// What is a callback Function in JavaScript.

// setTimeout(function () {
//     console.log('Timer')
// }, 5000);

// function x(y) {
//     console.log("X")
//     y();
// }

// x(function y() {
//     console.log("Y");
// });

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    });
};

attachEventListeners();

// JavaScript is a synchronous and single-threaded language.

// Blocking the main thread

// Power of callback?

// Deep about Event listeners

// Closures Demo with event listeners

// Scope Demo with Event listeners

// Garbage Collection & removeEventListeners