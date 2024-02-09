//strexm.js
//String function

//declare a string
const data = "I am a Boy"

//
console.log(data.toUpperCase())
console.log(data.toLocaleLowerCase())

//charAt
console.log(data.charAt(3))//o/p ==I

//nreaks a string by charecter
const words = data.split(' ')
console.log(words)

const otherString = ' and indian'
console.log(data.concat(otherString))

console.log(data.replace('Boy', 'Girl'))

console.log(data.length)

console.log(data.slice(2,8))

console.log(data.indexOf('B'))


