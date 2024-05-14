"use strict";
// Making a function 
Object.defineProperty(exports, "__esModule", { value: true });
function Make_shirt(size = "Large", printMassage = "I Love Coding") {
    console.log(`creating a ${size} shirt with the ${printMassage} prints on shirt.`);
}
// calling a function with Large size shirt
Make_shirt();
//calling a function with medium size shirt
Make_shirt("Medium");
//calling a function with small size shirt and also diffrent message print 
Make_shirt("Small", "I Love TypeScript");
