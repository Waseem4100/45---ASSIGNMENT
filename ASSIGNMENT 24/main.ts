//QUESTION 24 :
/**Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following: */

//• Tests for equality and inequality with strings
let apple :string ="Apple";

console.log("is apple is equal to apple")
console.log(apple === "Apple")

console.log("is apple is not equal to apple")

console.log(apple != "Apple")

// • Tests using the lower case function
let name = "BILAL"

console.log("is name is  equal to BILAL")
console.log(name.toLowerCase()=="BILAL")
console.log("is name is not equal to BILAL")
console.log(name.toLowerCase()!= "BILAL")

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a =5
let b = 10

console.log(b>a)

console.log(a<b)

console.log(b>=a)

console.log(a<=b)
// • Tests using "and" and "or" operators

let x = 5
let y = 10
let z = 20

console.log(x<=y&&y<=z)

console.log(x<=y&&y>=z)

console.log(x>=y ||y<=z)

console.log(x>y || y>z)

// • Test whether an item is in a array
let items =["mango", "apple","orange"]

console.log(items.includes("orange"))

// • Test whether an item is not in a array

console.log(items.includes("apple"))