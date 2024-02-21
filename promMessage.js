//promMessage.js

const generateMeaaage = (toName) => {
    //creating promise
    const messagePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (toName == "") {
                reject(new Error('Please provide name'))
            } else {
                const message = `Hi...${toName}`
                resolve(message)
            }
        }, 3000);
    })

    return messagePromise
}

//calling promise function
generateMeaaage("Ashish")
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Work Done")
    })