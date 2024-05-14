//Define a function with a rest parameter that accept item argument representing our Sandwich
function makeSAndwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Now Enjoy Sandwich");
}
// call the function 3 time with 3 diffrent number of argument
makeSAndwich("Chicken", "Cheese", "Mayo", "Egg");
makeSAndwich("Bread", "Butter");
makeSAndwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
