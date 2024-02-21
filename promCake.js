//promCake.js
//1 prepare batter
function prepareBetter(flavor) {
    //creating cake
    let newCake = {}

    const promPrepBetter = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (flavor == "") {
                reject(new Error("Please choose flavor"))
            } else {
                newCake.flavor = flavor
                resolve(newCake)
            }
        }, 4000);
    })

    return promPrepBetter
}



prepareBetter("Choco")
    .then((result) => {
        console.log(result)
        console.log('U Choose' + result.flavor)
    }).catch((err) => {
        console.log(err)
    });