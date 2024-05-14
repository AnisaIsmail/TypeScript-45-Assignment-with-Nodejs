//Define a function with a rest parameter that accept item argument representing our Sandwich

function makeSAndwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("Now Enjoy Sandwich");
  }

 // call the function 3 time with 3 diffrent number of argument

 makeSAndwich("Chicken", "Cheese", "Mayo", "Egg");

 makeSAndwich("Bread", "Butter");

 makeSAndwich("Bread", "Butter", "Mayo", "Egg", "Cheese","Chicken", "Lettuce", "Tomato");
