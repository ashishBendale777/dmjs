//funObj.js

const BankAccount = {
    accNo: 1,
    accType: "Saving",
    accBalance: 1200,
    accName: "Ashu"
}

function checkBalance() {
    console.log("Balance Is", BankAccount.accBalance)
}

function withdraw(amount) {
    BankAccount.accBalance -= amount
    console.log("After With draw", BankAccount.accBalance)
}

const deposite = (amount) => {
    BankAccount.accBalance += amount
    console.log("After Depositr", BankAccount.accBalance)
}

checkBalance()

withdraw(500)
deposite(1200)