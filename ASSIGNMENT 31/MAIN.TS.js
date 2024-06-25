//QUESTION #31 
/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var username = ["Waseem", "Admin", "Usman", "Anus"];
while (username.pop() == null)
    for (var i = 0; i < username.length; i++) {
        if (username.includes("Admin")) {
            console.log("Hello admin, would you like to see a status report?");
        }
        if (username == null) {
            console.log("We need to find some users!");
        }
        else {
            console.log("Hello ".concat(username[i], ", thank you for logging in again."));
        }
    }
