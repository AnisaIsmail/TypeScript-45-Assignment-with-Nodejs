// great magician:     //define the function to show magician name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magician great through .map() it will be modify arry 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magician names
var magician_name = ["Cindrella", "sir Bilal", "sir Hamza"];
// call make_great function to modify magician name
var great_magicians = make_great(magician_name);
//call show_magicians
show_magicians(great_magicians);
