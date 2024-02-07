//arrObjs.js

//creating Onjects

//simple object
const student = {
    stdName: "Ashish",
    stdCourse: "MCA",
    stdMarks: 54
}

// student.stdMobNo=5435345

// console.log(student.stdName)
// console.log(student.stdMarks)
// console.log(student.stdMobNo)

const stodentList = [{
    stdId: 1,
    stdName: "Ashish",
    stdCourse: "MCA",
    stdMarks: 54
}, {
    stdId: 2,
    stdName: "Pawan",
    stdCourse: "MSC",
    stdMarks: 88
}, {
    stdId: 3,
    stdName: "Amol",
    stdCourse: "MCA",
    stdMarks: 12
}, {
    stdId: 4,
    stdName: "Sarvesh",
    stdCourse: "MSC",
    stdMarks: 73
}, {
    stdId: 5,
    stdName: "Dhirah",
    stdCourse: "MCA",
    stdMarks: 76
}, {
    stdId: 6,
    stdName: "Sam",
    stdCourse: "MCA",
    stdMarks: 23
}]

const stdData = stodentList.find((std) => std.stdId == 5)
console.log(stdData)

//filter
const stdData2 = stodentList.filter((std) => std.stdMarks < 35)
console.table(stdData2)

//some on array of obj
const somRes = stodentList.some((std) => std.stdName == "Pratik")
console.log(somRes)