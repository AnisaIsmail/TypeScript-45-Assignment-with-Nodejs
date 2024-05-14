// Define a function to create a car object with optinal option:

function create_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
// Add additinol option to the car object
options.forEach(Option => {
    let [key, value] = Option.split(":");
    car[key.trim()] = value.trim(); 
});

return car;
}

// call the function to create a car object
let my_car = create_car("Civic", "BMW", "color: Black", "sunroof: True", "Year: 2024" );

// print the veriable :
console.log(my_car);
