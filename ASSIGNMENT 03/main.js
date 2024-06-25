//QUESTION # 3
/**Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */
var person = " waseem ahmed";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
