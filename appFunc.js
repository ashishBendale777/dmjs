//appFunc.js

//simple function declaration
function add() {
    var a = 43
    var b = 54
    // console.log("ADD", a + b)
    return a + b
}

//function call
const ans = add()

console.log(ans)

//function with params
function sub(x, y) {
    console.log(x - y)
    return x - y
}
console.log(sub(12, 4))
// console.log(sub(565, 43))
// console.log(sub(12, 434))

//arrow function
const multiply = (p, q) => {
    console.log("Mul", p * q)
}

multiply(43, 2)

const div = (d, b) => d / b
console.log("DIV",div(12,2))