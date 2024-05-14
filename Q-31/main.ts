let userName = ["Tooba", "Neha", "Mehak", "Admin", "Khadija"];

userName = []

if(userName.length === 0){
     console.log("your Array in Empty we need to find some users!");
}
else {
    //using ForEach loop on Array

 userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello! ${oneUser}, would you like to see a status report?`);
        
    }else{
        console.log(`Hello! ${oneUser}, Thank you for logging in again`);
        
    }
})
} 