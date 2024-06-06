//QUESTION # 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/

let favorite_fruits = ["apple", "orange", "mango"]

if (favorite_fruits.includes("apple")) {
    console.log(" I really like apple ");
}
if (favorite_fruits.includes("mango")) {
    console.log(" I really like mango ");
}

if (favorite_fruits.includes("strwaberry")) {
    console.log(" I really like strwaberry ");
}

if (favorite_fruits.includes("pears")) {
    console.log(" I really like pears ");
}

if (favorite_fruits.includes("orage")) {
    console.log(" I really like orange ");
}