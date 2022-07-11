// Challenge 1
// Get the nth number in the fibonacci sequence given n
// Alternatively given a number F, print out whether it's a fibonacci number and what the closest index n in the fibonacci sequence is

// fibonacci:
// 0,1,1,2,3,5,8,13...

function fibonacci(indexNumber) {
    if (indexNumber < 2) {
        return indexNumber
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= indexNumber; i++) {
        let c = a + b
        a = b
        b = c
    } return b
}

function isFibonacci(num) {
    if (num == 0) {
        return `0 is a fibonacci number, and its index is 0.`
    }

    if (num == 1) {
        return '1 is a fibonacci number, and its index is 1 or 2'
    }

    let index = 3
    while (num !== fibonacci(index)) {
        if (num < fibonacci(index)) {
            let difference = Math.abs(num - fibonacci(index)) - Math.abs(num - fibonacci(index - 1))
            if (difference < 0) {
                return `${num} is not a fibonacci number. The closest fibonacci number to it is ${fibonacci(index)} whose index is ${index}`
            } else if (difference == 0) {
                return `${num} is not a fibonacci number. The closest fibonacci numbers to it are ${fibonacci(index - 1)} whose index is ${index - 1}, and ${fibonacci(index)} whose index is ${index}`
            } else {
                return `${num} is not a fibonacci number. The closest fibonacci number to it is ${fibonacci(index - 1)} whose index is ${index - 1}`
            }
        }
        index++
    }
    if (num == fibonacci(index)) {
        return `${num} is a fibonacci number, and its index is ${index}.`
    }
}


console.log(isFibonacci(0))
console.log(isFibonacci(1))
console.log(isFibonacci(2))
console.log(isFibonacci(3))
console.log(isFibonacci(4))
console.log(isFibonacci(5))
console.log(isFibonacci(7))
console.log(isFibonacci(10))
console.log(isFibonacci(17))