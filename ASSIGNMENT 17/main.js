// QUESTION # 17  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
var guest = ["Usman", "Anas", "Taha", "Jawad"];
var cannotAttend = guest[0];
console.log("".concat(cannotAttend, " cannot attend the dinner"));
guest.splice(0, 1, "Sufiyan");
console.log("good news! i  found a bigger table for dinner");
//unshift is used for adding a value at the first place of an array
guest.unshift("Zaryab");
//PUSH is used for adding a value in the last place of an array
guest.push("Areeb");
//dividing lenght of an array to the middle index of the array
//using splice to a value in the middle index of an array
var middleindex = Math.floor(guest.length / 2);
guest.splice(middleindex, 0, "faizan");
guest.map(function (items) { return console.log("".concat(items, " you have been invited to the dinner")); });
console.log("sorry! the new table won't arrive at time so i can only invite two guest tothe dinner");
//while loop is used for doing a task until given condiation is met
//pop is used to remove last value from from an array
while (guest.length > 2) {
    var removedguest = guest.pop();
    console.log("sorry ".concat(removedguest, " i can't invite youthe dinner"));
}
;
while (guest.length > 0) {
    var newlist = guest.pop();
    console.log("".concat(newlist, " you are still invited to the dinner"));
}
;
console.log(guest);
