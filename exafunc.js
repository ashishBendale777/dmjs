//exafunc.js

//function is block of code which is reusable at
//anywhere in a project

//step 1 define/declare function
//function without params
function add() {
    //function body
    var a = 43
    var b = 54
    console.log('Sum', a + b)
}


//function with parameters
function sub(x, y) {
    console.log("Sub", x - y)
}

//function calling
add()

//function calling with parameters
sub(32, 65)
sub(22, 35)