// great magician:     //define the function to show magician name
function show_magicians (magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//function to make magician great through .map() it will be modify arry 
function make_great (magicians: string[]){
  return  magicians.map(name => `The Great ${name}`);
}

// define an array of magician names
let magician_name = ["Cindrella", "sir Bilal", "sir Hamza"]

// call make_great function to modify magician name
 let great_magicians = make_great(magician_name);

//call show_magicians
show_magicians(great_magicians)

