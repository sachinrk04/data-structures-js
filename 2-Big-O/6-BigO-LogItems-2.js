function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}

logItems(3)

// Code run two times
// n + n = 2n ------> O(2n)
// But here 2n or 3n ... here constant value dose not maiter
// Complexity is O(n)
