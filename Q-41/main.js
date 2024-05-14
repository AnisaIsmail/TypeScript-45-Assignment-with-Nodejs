// Define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// define an array containing magician name;
var magician_name = ["Cindrella", "sir Bilal", "sir Hamza"];
// call the function to print each magician NAME;
show_magician(magician_name);
