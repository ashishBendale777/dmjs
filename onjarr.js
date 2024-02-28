//onjarr.js

//creating object
const person = {
    perName: "Ashish",
    perMobNo: 365463564,
    perAddress: "sadjah sashdjahs",
    perCity: "Jalgaon",
    perId: 12,
}

console.log(person.perName)
console.log(person.perCity)

person.perCity = "BSL"

console.log(person.perCity)


//creating array of Objects

const students = [{
    stdId: 1,
    stdName: "Ashish",
    stdMarks: 54,
    stdCourse: "MCA",
}, {
    stdId: 2,
    stdName: "Ashish",
    stdMarks: 54,
    stdCourse: "BCA",

}, {
    stdId: 3,
    stdName: "Ashish",
    stdMarks: 54,
    stdCourse: "BCA",

}, {
    stdId: 4,
    stdName: "Ashish",
    stdMarks: 54,
    stdCourse: "MCA",
}]

//return single object from array
const studData = students.find((std) => std.stdId == 3)

console.log(studData)

//return multiple object from array
const studsCourse = students.filter((std) => std.stdCourse == "BCA")
console.log(studsCourse)
console.table(studsCourse)