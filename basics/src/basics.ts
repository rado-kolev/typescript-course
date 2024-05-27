// *****************************************************************************
// ! All credits for this course go to John Smilga: https://github.com/john-smilga

// TODO ----> For contrast comments is used the VS Code extension Better Comments
// *****************************************************************************


// ! *** Type Annotations ***
// ? --> Allow developers to specify the types of variables, function parameters, return types, and object properties.

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20; //! Type 'number' is not assignable to type 'string'


let amount: number = 12;
amount = 12 - 1;
console.log(amount);

// amount = 'pants'; //! Type'string' is not assignable to type 'number'


let isAwesome: boolean = true;
isAwesome = false;
console.log(isAwesome);

// isAwesome = 'shakeAndBake'; //! Type'string' is not assignable to type 'boolean



// ! *** Type Inference ***
// ? --> The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined.

let awesomeName2 = 'shakeTheCake'; //* TypeScript compiler will infer the type of the variable
awesomeName2 = 'somethingElse';
awesomeName2 = awesomeName2.toUpperCase();
console.log(awesomeName2);



// TODO *** *** Challenge *** ***

//* 1. Create a variable of type string and try to invoke a string method on it.
//* 2. Create a variable of type number and try to perform a mathematical operation on it.
//* 3. Create a variable of type boolean and try to perform a logical operation on it.
//* 4. Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.


// TODO 1. String
let greeting: string = 'Hello, TypeScript!';
greeting = greeting.toUpperCase(); //* This should work fine

// TODO 2. Number
let age: number = 25;
age = age + 5; //* This should work fine

// TODO 3. Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult; //* This should work fine

// TODO 4. Assigning different types
//* Uncommenting any of these will result in a TypeScript error

// greeting = 10; //! Error: Type 'number' is not assignable to type 'string'
// age = 'thirty'; //! Error: Type 'string' is not assignable to type 'number'
// isAdult = 'yes'; //! Error: Type 'string' is not assignable to type 'boolean'



// ! *** Union Types ***
// ? -->  A Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values.

let tax: number | string = 10;
tax = 100;
tax = '$10';

//* fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';

// requestStatus = 'random'; //! Error: Type 'random' is not assignable to type '"pending" | "success" | "error"'



// ! *** Type - 'any' ***
// ? --> The 'any' type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type.

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = true; //* okay, definitely a boolean :)



// TODO - Practical Application of Type Annotation
// ? The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);



// TODO *** *** Challenge *** ***

//* 1. Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
//* 2. Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

// TODO 1. Order Status
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

// orderStatus = 'cancelled'; //! This will result in a TypeScript error


// TODO 2. Discount
let discount: number | string = 20;
discount = '20%';

// discount = true; //! This will result in a TypeScript error



// ! *** Arrays - Fundamentals ***
// ? Arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.

let prices: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];
// fruit.push(1);
// let people: string[] = ['bobby', 'peter', 1];


//* Be careful "[]" means literally empty array

// let randomValues: [] = [1];


//* Be careful with inferred array types

// let names = ['peter', 'susan'];
// let names = ['peter', 'susan', 1];

let array: (string | boolean)[] = ['apple', true, 'orange', false];



// TODO *** *** Challenge *** ***

//* 1. Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
//* 2. Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
//* 3. Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.

// TODO 1. Temperatures
let temperatures: number[] = [20, 25, 30];

// temperatures.push('hot'); //! This will result in a TypeScript error


// TODO 2. Colors
let colors: string[] = ['red', 'green', 'blue'];

// colors.push(true); //! This will result in a TypeScript error


// TODO 3. Mixed Array
let mixedArray: (number | string)[] = [1, 'two', 3];

// mixedArray.push(true); //! This will result in a TypeScript error



// ! *** Objects - Fundamentals ***
// ?  An object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.

let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue'; //! This will result in a TypeScript error

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' }; //! This will result in a TypeScript error

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'new book'; //! Error: Cannot assign to 'title' because it is a read-only property



// TODO *** *** Challenge *** ***

//* 1. Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
//* 2. Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
//* 3. Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

// TODO 1. Bike
let bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };

// bike.year = 'old'; //! This will result in a TypeScript error

// TODO 2. Laptop
let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };

// let laptop2: { brand: string, year: number } = { brand: 'HP' }; //! This will result in a TypeScript error

// TODO 3. Products
let product1 = { title: 'Shirt', price: 20 };
let product2 = { title: 'Pants' };
let products: { title: string; price?: number }[] = [product1, product2];

// products.push({ title: 'Shoes', price: 'expensive' }); //! This will result in a TypeScript error



// ! *** Functions - Fundamentals ***
// ? Functions can have typed parameters and return values, which provides static type checking and autocompletion support.

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi('john');
// sayHi(3) //! This will result in a TypeScript error
// sayHi('peter', 'random'); //! This will result in a TypeScript error

function calculateDiscount(price: number): number {
  // price.toUpperCase(); //! This will result in a TypeScript error
  const hasDiscount = true;
  if (hasDiscount) {
    return price;
    // return 'Discount Applied'; //! This will result in a TypeScript error
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// "any" example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;

// run time error
// someValue.myMethod(); //! This will result in a TypeScript error



// TODO *** *** Challenge *** ***

//* 1. Create a new array of names.
//* 2. Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
//* 3. Use this function to check if various names are in your array and log the results.

//  TODO 1. Names
const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

//  TODO 2. Create function
function isNameInList(name: string): boolean {
  return names.includes(name);
}

//  TODO 3. Use function
let nameToCheck: string = 'Jane';
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}



// ! *** Functions - Optional and Default Parameters ***
// ? A default parameter value is an alternative to an optional parameter. When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter.

// ? However, there's a key difference between a parameter with a default value and an optional parameter. If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined.

// !!! A function with optional parameters must work when they are not supplied

function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); //* Output: 80

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); //* Output: 300

function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); //* Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); //* Output: 300



// ! *** Functions - rest parameter ***
// ? A rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. These arguments are collected into an array, which can be accessed within the function.

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result1 = sum('The total is:', 1, 2, 3, 4, 5); //* result will be "The total is: 15"



// ! *** Functions - "void" return type ***
// ? Void is a special type that represents the absence of a value. When used as a function return type, void indicates that the function does not return a value.

function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!

// !!! It's important to note that in TypeScript, a function that is declared with a void return type can still return a value, but the value will be ignored. For example, the following code is valid TypeScript:

function logMessage1(message: string): void {
  console.log(message);
  // return 'This value is ignored'; //! Type 'string' is not assignable to type 'void'
}

logMessage1('Hello, TypeScript!'); // Output: Hello, TypeScript!



// ! *** Functions - Using Union Types as Function Parameters ***

//* A function that accepts a parameter of a union type string | number
function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10); // Output: 20
processInput('Hello'); // Output: HELLO

//* The processInput function takes a parameter input that can be either a string or a number. Inside the function, we use a type guard (typeof input === 'number') to check the type of input at runtime. If input is a number, we double it. If input is a string, we convert it to uppercase.



// ! *** Functions - Using Objects as Function Parameters ***

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

//* alternative
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!`);
}

const newStudent = {
  id: 5,
  name: 'Anna',
};

createStudent(newStudent);



// ! *** Gotcha - Excess Property Checks ***
// ? TypeScript only performs excess property checks on object literals where they're used, not on references to them.

function createStudent1(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!`);
}

const newStudent1 = {
  id: 5,
  name: 'Anna',
  email: 'anna@gmail.com',
};

//* When you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors.

//? createStudent1({ id: 1, name: 'Bob', email: 'bob@gmail.com' });


//* However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent.

createStudent1(newStudent1);



// TODO *** *** Challenge *** ***

//* 1. Create a function named processData that accepts two parameters:
  //* 1.1. The first parameter, input, should be a union type that can be either a string or a number.
  //* 1.2. The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false.
  
//* 2. The function should behave as follows:
  //* 2.1. If input is of type number, the function should return the square of the number.
  //* 2.2. If input is of type string, the function should return the string in uppercase.
  //* 2.3. If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.
  
// TODO
function processData(
  input: string | number,
  config: {reverse: boolean} = {reverse: false}
): string | number {
  if (typeof input === 'number') {
    return input ** 2;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10)); // Output: 100
console.log(processData('Hello')); // Output: HELLO
console.log(processData('Hello', { reverse: true })); // Output: OLLEH
