//QUESTION # 40
/**40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.

 */
function make_album( Artist_name : string ,Album_title : string , tracks ? : number){

    let Album: {artist :string, title : string, track? : number} ={
        artist :Artist_name,
        title : Album_title,
    };
    if(tracks!==undefined){

         Album.track = tracks;
    }

         return Album;

}

let Album1 =  make_album("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band")
let Album2 =  make_album("Led Zeppelin", "IV", 8)
//let Album3 =  make_album("")
console.log(Album1)
console.log(Album2)
