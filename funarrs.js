//funarrs.js

const nums = [43, 65, 23, 76, 23, 76, 23]

nums.push(5565)
nums.unshift(123)
nums.unshift(12)
nums.unshift(126)

nums.pop()
nums.pop()
nums.shift()
nums.shift()


//includes
const result = nums.includes(23)

//console.log(nums)
console.log(result)
//console.log(nums.length)
//every
const res2 = nums.every((n) => n <= 23)
console.log(res2)

//some
const resSome = nums.some((n) => n <= 21)
console.log(resSome)

//reduce
const arrSum = nums.reduce((total, nextNum) => total + nextNum, 0)
console.log("RESADD",arrSum)

//join
const joinRes=nums.join("$")
console.log(joinRes)