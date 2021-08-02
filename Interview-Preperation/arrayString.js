// Q: Create a Javascript function that takes an array of strings, and then sorts the array by length of the strings in ascending order.

let arr = ['asd', 'asdas', 'asdasd', 'sd'];
arr.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});
console.log(arr)


// Q: Create a Javascript function, that takes two Arrays, merges them and returns it back.

// let arr1 = [1,2,3]
// let arr2 = [5, 7, 8]

// function mergeArray(a1, a2) {
//     return a1.concat(a2)
// }

// console.log(mergeArray(arr1, arr2))

// Q: Extend the capability of the function to take any number of arrays and then return the merged result back.

// let arr1 = [1,2,3]
// let arr2 = [5, 7, 8]
// let arr3 = [9, 10, 18]

// function mergeArray(a, b) {
//     return a.concat(b)
// }

// let arrays = [arr1, arr2, arr3].reduce(
//     function(a, b) {
//         return mergeArray(a, b)
//     },[]
// )

// console.log(arrays)