/*
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

Output:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, 
Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, 
Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

*/



function isDivide(n1, n2) {
	if (n1%n2 === 0) {
  	return true
  } else {
  	return false
  }
}

function isDivideThree(num) {
	if (isDivide(num, 3)) {
  	return true
  } else {
  	return false
  }
}

function isDivideFIve(num) {
	if (isDivide(num, 5)) {
  	return true
  } else {
  	return false
  }
}

let arr = [];
for (let i = 1; i <= 100; i++) {
    if (isDivideThree(i)) {
        isDivideThree(i)
        if (isDivideFIve(i)) {
            isDivideFIve(i)
            // console.log("FizzBuzz")
            arr.push("FizzBuzz")
        } else {
            // console.log("Fizz")
            arr.push("Fizz")
        }
    } else if (isDivideFIve(i)) {
        isDivideFIve(i)
        // console.log("Buzz")
        arr.push("Buzz")
    } else {
        // console.log(i)
        arr.push(i)
    }
}
console.log(arr.join())