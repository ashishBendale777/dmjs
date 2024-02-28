//arrexample.js
var fruits = ["Kiwi", "Banana", "Berry", "Mango"]
console.log(fruits[1])

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

for (const fruit of fruits) {
    console.log(fruit)
}

for (const index in fruits) {
    console.log(fruits[index])
}

// let arr = [3, 5, 13, 54] //75