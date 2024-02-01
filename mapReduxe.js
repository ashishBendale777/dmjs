const peoples = [{
    name: "Ashish",
    age: 30
},
{
    name: "Sam",
    age: 21
}, {
    name: "Sarvesh",
    age: 32
}, {
    name: "Dhiraj",
    age: 34
}]

//peoples.map((person) => console.log(person.name, " ", person.age))

const newPersonArr = peoples.map((per) => per.name + " " + per.age)
console.log(newPersonArr)

const ageTotal = peoples.reduce((total, currPer) => total + currPer.age, 0)
console.log("TOTAL", ageTotal)


