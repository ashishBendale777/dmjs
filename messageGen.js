// //messageGen.js
//console.log("Messaage")


//without callback
// function generateMessage(toName) {
//     return `Hi ${toName}`
// }

// function printMessage(message) {
//     console.log(message)
// }

// var myMessage;

// setTimeout(() => {
//     myMessage = generateMessage('Ashish')
//     console.log("message generated")
// }, 3000);

// setTimeout(() => {
//     printMessage(myMessage)
// }, 5000)



//wirh callback function

function generateMessage(toName, nextStep) {
    let myMessage = `Hi ${toName}`
    console.log("Gemerating message....")
    setTimeout(() => {
        console.log("message generated.")

        nextStep(myMessage)
    }, 3000)
}

function printMessage(message) {
    console.log(message)
}

//calling function generateMessage
generateMessage("Ashish", (message) => {
    printMessage(message)
})