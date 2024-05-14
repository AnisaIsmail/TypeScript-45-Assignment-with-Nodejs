// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placeToVisit: string[] = ["paris", "china", "london", "saudia Arab", "japan" ];

//print in original order
console.log("original order:", placeToVisit);

// print array in alphabetical order
console.log("alphabetical order:", placeToVisit.slice().sort());

// array is still in its original order
console.log("original order after sorting:", placeToVisit);

//print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", placeToVisit.slice().sort());

// array is still in its original order
console.log("original order after reverse sorting:", placeToVisit);

// Reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:", placeToVisit);

//Reverse the order of list again
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);

// sort your array so it's sorted in alphabetical order
console.log("sorted in alphabetical order:", placeToVisit.slice().sort());
 
 //Sort to change your array so it’s stored in reverse alphabetical order
 console.log("stored in reverse alphabetical order:", placeToVisit.slice().sort());
 