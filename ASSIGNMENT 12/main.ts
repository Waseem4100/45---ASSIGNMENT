/* QUESTION  #12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/

let NAME : string[] = ["waseem", "anas", "taha","jawad"]
let MASSEGE : String = " do you like to play circket"
for(let i=0; i< NAME.length;i++){
    console.log(`${NAME[i]},${MASSEGE}`)
}

