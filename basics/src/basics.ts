// *****************************************************************************
// TODO ----> For contrast comments is used the extension Better Comments  <----
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
notSure = false; //* okay, definitely a boolean :)



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
