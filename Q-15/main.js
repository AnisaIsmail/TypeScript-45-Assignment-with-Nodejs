//changing guest List: you just heard that  one of your guesst can`t make the Dinner, so you need to send out a new set of invitations. You`ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestlist = ["mehak", "Neha", "Maham"];
//print the name who is not invite.
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " not invited to dinner"));
//push
guestlist.push("muqadas");
//print a message 
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to Dinner."));
});
