//QUESTION # 41
/**41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
 */

let magician_names =[" harry houdini"," harry potter", " waseem"]

function show_magicians(magicians: string []){
    magicians.map(name => console.log(name ))
}

show_magicians(magician_names)