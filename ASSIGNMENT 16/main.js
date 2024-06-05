/*QUESTION # 16 More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guest = ["Usman", "Anas", "Taha", "Jawad"];
var cannotAttend = guest[0];
console.log("".concat(cannotAttend, " cannot attend the dinner"));
guest.splice(0, 1, "Sufiyan");
console.log("good news! i  found a bigger table for dinner");
//unshift is used for adding a value at the first place of an array
guest.unshift("Zaryab");
// PUSH is used for adding a value in the last place of an array
guest.push("Areeb");
var middleindex = Math.floor(guest.length / 2);
guest.splice(middleindex, 0, "faizan");
guest.map(function (items) { return console.log("".concat(items, " you have been invited to the dinner")); });
