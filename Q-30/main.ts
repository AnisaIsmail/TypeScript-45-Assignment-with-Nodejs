// creating an Array
let userName = ["Tooba", "Neha", "Mehak", "Admin", "Khadija"]

//using ForEach loop on Array

userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello! ${oneUser}, would you like to see a status report?`);
        
    }else{
        console.log(`Hello! ${oneUser}, Thank you for logging in again`);
        
    }
})