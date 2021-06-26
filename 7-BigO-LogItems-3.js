function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             for (let k = 0; k < n; k++) {
//                 console.log(i, j, k)
//             }
//         }
//     }
// }

logItems(10)

// Code run n*n times
// n * n = n^2(power of 2) ------> O(n^2)
// But here n^2 or n^3 ... here constant value dose not maiter
// Complexity is O(n^2)