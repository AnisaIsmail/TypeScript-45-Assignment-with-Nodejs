// creating veriable
let apple = "apple"

// test for equality
console.log("apple is equal to apple");
console.log(apple == "apple");

// test for inequality
console.log("apple is not equal to apple");
console.log(apple != "apple");

// test using the lower case function 

let uppercaseApple = "APPLE"

// equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

// not equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

// numerical test

let ten = 10;
let twenty = 20;

//equal to
console.log("ten is euqal to twenty");
console.log(ten == twenty);

// not equal to
console.log("ten is not equal to twenty");
console.log(ten != twenty);

//greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);

// less than
console.log("twenty is less than twenty");
console.log(twenty < ten);

// greater than or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);

// less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);

// test using "and" and "or" operators

// using && (and)  
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);

// using || (or)
console.log("twenty is greater than ten or twenty is not equal to twenty");
console.log(twenty > ten || twenty != twenty);

console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(twenty < ten || twenty != twenty);

// testing item is in a array
let fruits = ["apple", "banana", "mango"];
console.log("banana is include in my fruits array");
console.log(fruits.includes("banana"));

// testing item is not in a array

console.log("banana is not include in my fruits array");
console.log(!fruits.includes("banana"));

