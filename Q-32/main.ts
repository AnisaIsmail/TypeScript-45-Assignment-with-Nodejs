// Array of current Users
let current_Users = ["Khadija", "anaya", "Umaima", "Hammad", "Hamza"]

// Array of new Users
let new_Users = ["Yusra", "Asma", "Anaya", "Bilal", "Hamza"]

// Loop through new_Users to check usernames avaibility

new_Users.forEach(new_one_user =>{

    // Making a condition for username already exist and save in our_condition veriable 
    let our_condition = current_Users.some(current_one_User => current_one_User.toLowerCase() === new_one_user.toLowerCase())

  // print Different message using If-Else statment
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else {
        console.log(`This username ${new_one_user} is available.`);
     }
})




