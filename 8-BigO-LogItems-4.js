// Drop-Non-Dominants
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)              // O(n^2)
        }
    }

    for (let k = 0; k < n; k++) {
        console.log(k)                     // O(n)
    }
}

logItems(10)


// O(n^2) + O(n) = O(n^2 + n)

// Complexity is O(n^2)