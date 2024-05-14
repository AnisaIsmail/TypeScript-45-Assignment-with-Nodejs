// Array of current Users
var current_Users = ["Khadija", "anaya", "Umaima", "Hammad", "Hamza"];
// Array of new Users
var new_Users = ["Yusra", "Asma", "Anaya", "Bilal", "Hamza"];
// Loop through new_Users to check usernames avaibility
new_Users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition veriable 
    var our_condition = current_Users.some(function (current_one_User) { return current_one_User.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different message using If-Else statment
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
