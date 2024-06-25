//QUESTION # 44
/**44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.

 */
function make_sandwich(ingredients) {
    console.log("\n Making Sandwich with the Following Ingredients \n");
    ingredients.forEach(function (items) { return console.log(items); });
    console.log("\nYour Sandwich is Ready \n");
}
make_sandwich(["bread", "butter"]);
make_sandwich(["bread", "chicken", "onion", "tomato"]);
make_sandwich(["bread", "onion", "tomato"]);
