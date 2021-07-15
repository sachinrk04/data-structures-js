function x() {
    for (let i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000)
        }
        close(i)
    }
    console.log("Learn JavaScript");
}
x()

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Learn JavaScript");
// }
// x()

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         console.log("X=", i)
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Learn JavaScript");
// }
// x()