//cakeCallBack.js
console.log("Cake Making")

//1 prepare batter
function prepareBetter(flavor, nextStep) {
    //creating cake
    let newCake = {}
    newCake.flavor = flavor
    //pass cake to next step
    setTimeout(() => {
        console.log(`U choose ${newCake.flavor} cake`)
        nextStep(newCake)
    }, 3000);

}

//2 choose pan shape
function choosePanShape(cake, shape, nextStep) {
    cake.shape = shape
    setTimeout(() => {
        console.log(`U choose ${cake.shape} cake`)
        nextStep(cake)
    }, 3000);
}
//3 put in oven
function putInOven(cake, temprature, nextStep) {
    cake.IsBaked = true
    setTimeout(() => {
        console.log(`Ur cake is baked on temp ${temprature}`)
        nextStep(cake)
    }, 3000);
}
//4 decorate cake
function decorateCake(cake, color, nextStep) {
    cake.IsDecorated = true
    cake.color = color
    setTimeout(() => {
        console.log(`Ur cake is decorated with ${color}`)
        nextStep(cake)
    }, 3000);

}
//5 cut the cake
function cutCake(cake) {
    setTimeout(() => {
        console.log(`Ur cake is Cut enjoy the party`)
    }, 3000);

}



//main function
const makeCakeForMe = (flavor, shape, temp, color) => {
    prepareBetter(flavor, (cake) => {
        choosePanShape(cake, shape, (cakeWirhShape) => {
            putInOven(cakeWirhShape, temp, (bakedCake) => {
                decorateCake(bakedCake, color, (decoratedCake) => {
                    cutCake(decoratedCake)
                })
            })
        })
    })
}


//start making
makeCakeForMe("Choco","circle",321,"red")
makeCakeForMe("vanila","hearth",321,"black")