// // QUESTION # 19 Dinner Guests :
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/
var guest = ["Anas", "Sufiyan", "Usman", "Taha", "Jawad"];
guest.map(function (items) { return console.log("dear, ".concat(items, " you hve been invited to the dinner")); });
var guestlist = guest.length;
console.log("we have invited a taotal number of".concat(guestlist, " guest"));
