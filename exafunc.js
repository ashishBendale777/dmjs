var name = "Ashish@123"

var sentence = "i am a boy                "
// console.log(name.length)
// console.log(name.charAt(3))
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

console.log(sentence.split('a'))
console.log(name.split('@'))

console.log(sentence.replace('boy', 'girl'))
console.log(name.replace('@', '='))

console.log(sentence.indexOf('a'))
console.log(sentence.slice(2, 9))
console.log(sentence.substring(1, 5))

console.log(sentence.length)
console.log(sentence.trimEnd().length)

console.log(sentence.trim())