//QUESTION # 27
/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
//version 1
var Alien1 = "green";
if (Alien1 == "green") {
    console.log("the player earned 5 points.");
}
else if (Alien1 == "red") {
    console.log("the player earned 10 points.");
}
else if (Alien1 == "yellow") {
    console.log("the player earned 15 points.");
}
//version 2
var Alien2 = "red";
if (Alien2 == "green") {
    console.log("the player earned 5 points.");
}
else if (Alien2 == "red") {
    console.log("the player earned 10 points.");
}
else if (Alien2 == "yellow") {
    console.log("the player earned 15 points.");
}
// version 3
var Alien3 = "yellow";
if (Alien3 == "green") {
    console.log("the player earned 5 points.");
}
else if (Alien3 == "red") {
    console.log("the player earned 10 points.");
}
else if (Alien3 == "yellow") {
    console.log("the player earned 15 points.");
}
