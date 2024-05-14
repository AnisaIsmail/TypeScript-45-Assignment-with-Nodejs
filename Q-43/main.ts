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

// making a copy of orignal Array through .slic() function 

let copy_magician_names = magician_name.slice()

// modify the copied array to include "The Great" with thier name:

let copy_great_magicians = make_great(copy_magician_names)

//show both arrays orignal and copied

// orignal
console.log("orignal Array\n");
show_magicians(magician_name);

//copied
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);

 

