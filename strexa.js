//strexa.js
const sentence = "Hello world"

const words = sentence.split(' ')
console.log(words)
var lastWord = words[words.length - 1]
console.log(lastWord)
var capLastWord = lastWord.replace(lastWord.charAt(0),
    lastWord.charAt(0).toUpperCase())
console.log(capLastWord)

const finalSentemce = sentence.replace(lastWord, capLastWord)
console.log(finalSentemce)