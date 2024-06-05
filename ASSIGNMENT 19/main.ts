// // QUESTION # 19 Dinner Guests :
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/


let guest: string[] = ["Anas","Sufiyan","Usman", "Taha","Jawad"];
 guest.map((items)=> console.log(`dear ${items} you hve been invited to the dinner`));
let guestlist = guest.length
console.log(`we have invited a taotal number of${guestlist} guest`);
