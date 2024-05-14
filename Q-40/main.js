// Define a function
function make_Album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function with diffrent value;
var album1 = make_Album("Hammad", "Album title 1");
var album2 = make_Album("Hamza", "Album title 2");
// calling a make_Album function with third perameters
var album3 = make_Album("Bilal", "Album title 3", 10);
// print message
console.log(album1);
console.log(album2);
console.log(album3);
