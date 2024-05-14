// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestlist: string[] = ["Mehak", "Maham","muqadas"];
console.log("Great news! We found a bigger table");

//adding more guest 
guestlist.unshift("sadaf");

guestlist.splice(Math.floor(guestlist.length/2),0,"Tooba");

guestlist.push("Anaya");

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, You All are invited to Dinner.`);
    
});
