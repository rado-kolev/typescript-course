// *****************************************************************************
// ! All credits for this course go to John Smilga: https://github.com/john-smilga

// TODO ----> For contrast comments is used the VS Code extension Better Comments

// ? If needed, for better understanding each section marked with // ! *** NAME *** could be separated in a new file.
// *****************************************************************************

import { z } from 'zod';


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



// ! *** Type Alias ***
// ? A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias.All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.

// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };

// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }


//* The code above written with type alias

type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}


//* another example

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid


//* one more example

type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); // This will set the theme to 'dark'



// TODO *** *** Challenge *** ***

//* 1. Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

//* 2. Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

//* 3. Create a Union Type: Define a type Staff that is a union of Employee and Manager.

//* 4. Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

//* 5. Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

//* 6. Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

// TODO 1. Employee type

type Employee = {
  id: number;
  name: string;
  department: string;
};


// TODO 2. Manager type

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};


// TODO 3. Staff type

type Staff = Employee | Manager;


// TODO 4. printStaffDetails function

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `Manager ${staff.name} manages ${staff.employees.length} employees.`
    );
  } else {
    console.log(`Employee ${staff.name} works in ${staff.department} department.`);
  }
}


// TODO 5. Employee and Manager objects

const alice: Employee = {
  id: 1,
  name: 'Alice',
  department: 'Sales'
}

const steve: Employee = {
  id: 2,
  name: 'Steve',
  department: 'Engineering'
}

const bob: Manager = {
  id: 3,
  name: 'Bob',
  employees: [alice, steve]
}


// TODO 6. Test the function

printStaffDetails(alice); // Output: Employee Alice works in Sales department.
printStaffDetails(bob); // Output: Manager Bob manages 2 employees.



// ! *** Type Alias - Intersection Types ***
// ? An intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};



// ! *** Type Alias - Computed Properties ***
// ? Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };



// ! *** Interface - Fundamentals ***
// ? Allows to setup a shape for objects (only objects)

interface Book2 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book2 = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
};

deepWork.title = 'New Title'; //* allowed
// deepWork.isbn = 654321; //* not allowed



// ! *** Interface - Methods ***

interface Book3 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;

  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork1: Book3 = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWork1.printAuthor();
const result3 = deepWork1.printTitle('is an awesome book!');
console.log(result3);



// ! *** Interface - Methods (more options) ***
// ? It's generally a good practice to match the structure of the interface and the implementing object or class as closely as possible. This makes the code easier to understand and maintain. So, if printAuthor is defined as a method in the Book interface, it would be more consistent to implement it as a method in the deepWork object.

interface Book4 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;

  // method
  printAuthor(): void;
  printTitle(message: string): string;

  printSomething: (someValue: number) => number;
}

const deepWork2: Book4 = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },

  //* first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },

  //* second option
  printSomething: (someValue) => {
    // "this" gotcha
    console.log(deepWork2.author);
    return someValue;
  },

  //* third option
  // printSomething(someValue) {
  //   return someValue;
  // },

  //* alternative
  // printAuthor: () => {
  //   console.log(deepWork.author);
  // },
};

console.log(deepWork2.printSomething(34));

deepWork2.printAuthor();
const result4 = deepWork2.printTitle('is an awesome book!');
console.log(result4);



// TODO *** *** Challenge *** ***

//* 1. Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
  //* 1.1. Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
  //* 1.2. Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
  //* 1.3. Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
  //* 1.4. Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.

//* 2. Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.

//* 3. Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

// TODO 1. Define an interface Computer

interface Computer {
  readonly id: number,
  brand: string,
  ram: number,
  storage?: number,
  upgradeRam(value: number): number
}


// TODO 2. Create an object

const pc: Computer = {
  id: 1,
  brand: 'Dell',
  ram: 16, // in GB
  upgradeRam(value: number) {
    return this.ram += value;
  }
}

pc.storage = 512; // assigning a value to the optional storage property

// TODO 3. Use the object

pc.upgradeRam(16); // upgrade ram by 16GB

console.log(pc); // Output: { id: 1, brand: 'Dell', ram: 32, storage: 512 }



// ! *** Interface - Merging, Extend, TypeGuard ***

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// ? Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

// Usage
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// ? Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employee1 extends Person {
  employeeId: number;
}

const employee: Employee1 = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

// Interface multiple inheritance
interface Manager1 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager1 = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};



// TODO *** *** Challenge *** ***

//* 1. Define a Person interface with a name property of type string.

//* 2. Define a DogOwner interface that extends Person and adds a dogName property of type string.

//* 3. Define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.

//* 4. Define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.

//* 5. Create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

// ? A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

//* 6. Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.

//* 7. Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.

// TODO 1. Person interface

interface Person5 {
  name: string;
}


// TODO 2. DogOwner interface

interface DogOwner5 extends Person5 {
  dogName: string;
}


// TODO 3. Manager interface

interface Manager5 extends Person5 {
  managePeople(): void;
  delegateTasks(): void;
}


// TODO 4. getEmployee function

function getEmployee(): Person5 | DogOwner5 | Manager5 {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'John',
    };
  } else if (random < 0.66) {
    return {
      name: 'Sarah',
      dogName: 'Rex',
    };
  } else {
    return {
      name: 'Bob',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    };
  }
}


// TODO 5. Employee variable

const employee5: Person5 | DogOwner5 | Manager5 = getEmployee();


// TODO 6. isManager function

function isManager(obj: Person5 | DogOwner5 | Manager5): obj is Manager5 {
  return 'managePeople' in obj;
}


// TODO 7. Run code

if (isManager(employee5)) {
  employee5.delegateTasks();
}
console.log(employee5);



// ! *** Interface vs Type Alias ***
// ? A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.

type Person10 = {
  name: string;
  age: number;
};

let john10: Person10 = { name: 'John', age: 30 };


// ? An interface is a way to define a contract for a certain structure of an object.

interface Person11 {
  name: string;
  age: number;
}

let john11: Person11 = { name: 'John', age: 30 };


//! Key Differences
// ? Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = 'up' | 'down' | 'left' | 'right';

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = 'up';


// ? Interfaces are open and type aliases are closed. This means you can extend an interface by declaring it a second time. They both support extending other interfaces and types. Type aliases do this via intersection types, while interfaces have a keyword.

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}


// ? Interfaces can be implemented by classes, while type aliases cannot.
interface Person12 {
  name: string;
  greet(): void;
}

class Employee12 implements Person12 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let john12 = new Employee12('John');
john12.greet(); // Outputs: Hello, my name is John


// ? Type aliases can use computed properties, while interfaces cannot.

const propName13 = 'age';

type Animal13 = {
  [propName]: number;
};

let tiger13: Animal13 = { [propName13]: 5 };


//! That said, it's recommended to use interfaces over type aliases. Specifically, because you will get better error messages. TypeScript can provide terser and more focused messages when working with interfaces.



// ! *** Tuples ***
// ? A Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

let person15: [string, number] = ['john', 25];
console.log(person15[0]); // Outputs: john
console.log(person15[1]); // Outputs: 25

let john15: [string, number?] = ['john'];


// ? Tuples are useful when you want to return multiple values from a function.

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]); // Outputs: john
console.log(randomPerson[1]); // Outputs: 25


//? By default, tuples in TypeScript are not read - only.This means you can modify the values of the elements in the tuple. However, TypeScript does provide a way to make tuples read - only using the readonly keyword.

// let susan15: [string, number] = ['susan', 25];
// susan15[0] = 'bob';
// susan15.push('some random value');
// console.log(susan15); // Outputs ['bob', 25, 'some random value']

let susan15: readonly [string, number] = ['susan', 25];
// susan15[0] = 'bob'; //! Cannot assign to '0' because it is a read-only property
// susan15.push('some random value'); //! Property 'push' does not exist on type 'readonly [string, number]'
console.log(susan15); // Outputs ['susan', 25]



// ! *** Enums ***
// ? Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response); // Outputs {result: 200, data: ['first item', 'second item']}



// ! Enums - Gotcha : Reverse Mapping
// ? In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

// ? In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

// * enum ServerResponseStatus {
// *  Success = 'Success',
// *  Error = 'Error',
// * }

// * Object.values(ServerResponseStatus).forEach((value) => {
// *  console.log(value);
// * });
// ---------------------------------------------------


// enum ServerResponseStatus {
//   Success = 200,
//   Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// });
// ---------------------------------------------------


// * enum NumericEnum {
// *   Member = 1,
// * }

// * enum StringEnum {
// *   Member = 'Value',
// * }

// * let numericEnumValue: NumericEnum = 1; // This is allowed
// * console.log(numericEnumValue); // 1

// * let stringEnumValue: StringEnum = 'Value'; // This is not allowed
// --------------------------------------------------


// enum ServerResponseStatus {
//   Success = 'Success',
//   Error = 'Error',
// }

// function getServerResponse(): ServerResponse {
//   return {
//*     // result: ServerResponseStatus.Success,
//*     // this will not fly with string enum but ok with number
//     result: 'Success',
//     data: ['first item', 'second item'],
//   };
// }



// TODO *** *** Challenge *** ***
//* 1. Define an enum named UserRole with members Admin, Manager, and Employee.

//* 2. Define a type alias named User1 with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).

//* 3. Define a function named createUser that takes a User object as its parameter and returns a User1 object.

//* 4. Call the createUser1 function with an object that matches the User1 type, store the result in a variable, and log the variable to the console.


// TODO 1. Define an enum named UserRole

enum UserRole {
  Admin,
  Manager,
  Employee,
}


// TODO 2. Define a type alias named User

type User1 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};


// TODO 3. Define a function named createUser

function createUser1(user: User1): User1 {
  return user;
};


// TODO 4. Call the createUser1 function

const user: User1 = createUser1({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin,
  contact: ['johndoe@example.com', '123-456-7890'],
});

console.log(user);



// ! *** Type Assertion ***
// ? Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. This is especially useful when you know more about the type of a variable than TypeScript does.

let someValue5: any = 'This is a string';

// Using type assertion to treat 'someValue5' as a string
let strLength: number = (someValue5 as string).length;

type Bird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

//

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name); // Outputs 'Eagle'
console.log(dog.name); // Outputs undefined

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User5 = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user5: User5 = { name: 'john', status: statusValue as Status };



// ! *** Type 'unknown' ***
// ? The unknown type in TypeScript is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

// ? "error instanceof Error" checks if the error object is an instance of the Error class.

let unknownValue: unknown;

// Assign different types of values to unknownValue
unknownValue = 'Hello World'; // OK
unknownValue = [1, 2, 3]; // OK
unknownValue = 42.3344556; // OK

// unknownValue.toFixed( ); // Error: Object is of type 'unknown'

// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
  // TypeScript knows that unknownValue is a string in this block
  console.log(unknownValue.toFixed(2)); // OK - '42.33'
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // 'Something went wrong'
  } else {
    console.log(error); // 'some error'
    console.log('there was an error...'); // 'there was an error...'
  }
}



// ! *** Type 'never' ***
// ? "Never" is a type that represents the type of values that never occur.you can't assign any value to a variable of type never. TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

// let someValue: never = 0; //* A value can not be assigned to type "never"

type Theme1 = 'light' | 'dark';

function checkTheme(theme: Theme1) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }

  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }

  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}


enum Color {
  Red,
  Blue,
  // Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    default:
      // at build time
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
// console.log(getColorName(Color.Green)); // Green




// ! *** Type Guarding ***
// ? Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope. This is usually done using conditional statements that check the type of an object.

// ? In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.


// TODO *** *** Challenge - "typeof" guard *** ***
//* 1. Define the function checkValue that takes one parameter value of type ValueType.

//* 2. Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.

//* 3. If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.

//* 4. If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.

//* 5. Finally, call the checkValue function with value as the argument.


// starter code

type ValueType = string | number | boolean;

let value1: ValueType;
const random = Math.random();
value1 = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;


// TODO ***

function checkValue(value: ValueType) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
    return;
  }

  if (typeof value === 'number') {
    console.log(value.toFixed(2));
    return;
  }

  console.log(`boolean: ${value}`);
}

checkValue(value1);




// TODO *** *** Challenge - equality narrowing and check for property *** ***
// ? In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code.

// starter code

type Dog1 = { type: 'dog'; name: string; bark: () => void };
type Cat1 = { type: 'cat'; name: string; meow: () => void };
type Animal1 = Dog1 | Cat1;


// *** equality narrowing ***

//* 1. Define a function named makeSound that takes one parameter animal of type Animal.

//* 2. Inside the function, use an if statement to check if animal.type is 'dog'.

//* 3. If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.

//* 4. If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.

//* 5. Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

// TODO ***

// function makeSound(animal: Animal1) {
//   if (animal.type === 'dog') {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }


// *** check for property ***

//* 1. Define a function named makeSound that takes one parameter animal of type Animal.

//* 2. Inside the function, use an if statement with the in operator to check if the bark method exists on the animal object.

//* 3. If the bark method exists on animal, TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.

//* 4. If the bark method does not exist on animal, TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.

//* 5. Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

// TODO ***
function makeSound(animal: Animal1) {
  if ('bark' in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}




// TODO *** *** Challenge - "Truthy"/"Falsy" guard *** ***
// ? In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value.

//* 1. Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.

//* 2. Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

//* 3. If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.

//* 4. If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

//* 5. Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.


// TODO ***

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log('No string provided');
  }
}

printLength('Hello!'); //* Output: 6
printLength(null); //* Output: No string provided
printLength(undefined); //* Output: No string provided




// TODO *** *** Challenge - "instanceof" type guard *** ***
// ? The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.

try {
  // Some code that may throw an error
  throw new Error('This is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught an Error object: ' + error.message);
  } else {
    console.log('Caught an unknown error');
  }
}


//* 1. Start by defining the function using the function keyword followed by the function name, in this case checkInput.

//* 2. Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.

//* 3. Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.

//* 4. If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.

//* 5. If the input is not an instance of Date (which means it must be a string), return the input as it is.

//* 6. After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.

//* 7. You can store the return value of the function in a variable and then log it to the console to see the result.


// TODO ***

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random2 = checkInput('2020-05-05');
console.log(year);
console.log(random2);




// TODO *** *** Challenge - Type Predicate *** ***
// ? A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.

//* 1. Define the Person and Student types. Student should have a study method and Person should have a login method.

//* 2. Create a function named isStudent that takes a parameter person of type Person.

//* 3. In the function signature, specify a return type that is a type predicate: person is Student.

//* 4. In the function body, use a type assertion to treat person as a Student, and check if the study - method is not undefined. This will return true if person is a Student, and false otherwise.

//* 5. Use the isStudent function in an if statement with person as the argument.

//* 6. In the if block (where isStudent(person) is true), call the study method on person. TypeScript knows that person is a Student in this block, so this is safe.

//* 7. In the else block (where isStudent(person) is false), call the login method on person. This is safe because if person is not a Student, it must be a Person, and all Person objects have a login method.


// starter code

type Student3 = {
  name: string;
  study: () => void;
};

type User3 = {
  name: string;
  login: () => void;
};

type Person3 = Student3 | User3;

const randomPerson3 = (): Person3 => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

const person3 = randomPerson3();


// TODO ***

function isStudent(person3: Person3): person3 is Student3 {
  // return 'study' in person;
  return (person3 as Student3).study !== undefined;
}

// Usage

if (isStudent(person3)) {
  person3.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  person3.login();
}


// TODO *** with type 'never' gotcha

const person4: Person3 = {
  name: 'anna',
  study: () => console.log('Studying'),
  // login: () => console.log('Logging in'),
};
// person4;
function isStudent4(person4: Person3): person4 is Student3 {
  // return 'study' in person;
  return (person4 as Student3).study !== undefined;
}

// Usage

if (isStudent4(person4)) {
  person4.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  // in this case person is type "never"
  console.log(person4);
}




// TODO *** *** Challenge - Discriminated Unions and exhaustive check using the never type *** ***
// ? A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

//* 1. Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

//* 2. In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

//* 3. Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

//* 4. Use the reducer function in your application to handle actions and update the state.


// starter code

// type IncrementAction = {
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;


// TODO ***

type IncrementAction = {
  type: 'increment';
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement';
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;

    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  user: 'john',
  type: 'increment',
  amount: 5,
  timestamp: 123456,
});




// ! *** Generics - Fundamentals ***
// ? Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one. In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.

// In TypeScript, you can declare an array using two syntaxes:

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];


// ! *** Generics - Create Generic Function and Interface ***

// Define a function the usual way
function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

// Define a generic function
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);

// Define a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};



// ! *** Generics - Promise Example ***

// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.

async function someFunc(): Promise<string> {
  return 'Hello World';
}

const result5 = someFunc();



// ! *** Generics - Generate Array ***

// generate an array of strings
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(3, 'hello'));


// generate an array using generics
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(3, 'hello'); // ["hello", "hello", "hello"]
let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]

console.log(arrayStrings);
console.log(arrayNumbers);



// ! *** Generics - Multiple Different Types ***

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result6 = pair<number, string>(123, 'Hello');
console.log(result6); // Output: [123, "Hello"]



// ! *** Generics - Inferred Type and Type Constraints ***

function pair2<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// Usage
let result7 = pair2(123, 'Hello');

//  const [name,setName] = useState('')
//  const [products,setProducts] = useState<Product[]>([])

// type constraint on the generic type T, generic type can be either a number or a string.

function processValue<T extends number | string>(value: T): T {
  console.log(value);
  return value;
}

processValue('hello');
processValue(12);

// processValue(true);   //! Error: type 'boolean' is not assignable to parameter of type 'string | number'



// ! *** Generics - Type Constraints part 2 ***

type Car8 = {
  brand: string;
  model: string;
};

const car8: Car8 = {
  brand: 'ford',
  model: 'mustang',
};

type Product8 = {
  name: string;
  price: number;
};

const product8: Product8 = {
  name: 'shoes',
  price: 1.99,
};

type Student8 = {
  name: string;
  age: number;
};

const student8: Student8 = {
  name: 'peter',
  age: 20,
};

// T extends Student8 is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student8 or Student8 itself. In other words, T must have at least the same properties and methods that Student8 has.

// function printName<T extends Student8>(input: T): void {
//   console.log(input.name);
// }

// printName(student8);


// function printName<T extends Student8 | Product8>(input: T): void {
//   console.log(input.name);
// }

// printName(product8);


// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
// In other words, T must have at least the same properties and methods that { name: string } has.

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student8);
printName(product8);



// ! *** Generics - Default Value ***

// declare default type 'any'
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ['random', 1],
};




// ! *** Fetch Data ***

//* Won't set any state values

// const url = 'https://www.course-api.com/react-tours-project';

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);

     //* Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : 'there was an error...';
//     console.error(errMsg);
     //* throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// });

//* return empty array
//* throw error in catch block
//* we are not setting state values in this function


// TODO *** Setup type and provide correct return type for the above example ***

// const url = 'https://www.scourse-api.com/react-tours-project';

//* Define a type for the data you're fetching.

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
  //* Add more fields as necessary.
// };

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

    //* Check if the request was successful.
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data: Tour[] = await response.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   const errMsg =
  //     error instanceof Error ? error.message : 'there was an error...';
  //   console.error(errMsg);

    //* throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });


// TODO *** Fetch Data using Zod ***

//* First - npm install zod

// import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // something: z.string(),
});

// extract the inferred type
type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errMsg);

    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});




// ! *** Classes ***
// ? Classes in JavaScript are a blueprint for creating objects. They encapsulate data with code to manipulate that data. Classes in JavaScript support inheritance and can be used to create more complex data structures.

// ? A constructor in a class is a special method that gets called when you create a new instance of the class. It's often used to set the initial state of the object.

// TODO 1. Instance Property / Default Property - The checkedOut property in Book class is an instance property (or member variable). It's not specifically set in the constructor, so it could also be referred to as a default property or a property with a default value.

// TODO 2. ReadOnly modifier

class Book3 {
  readonly title: string; // TODO 2. Add readonly property
  author: string;
  checkedOut: boolean = false; // TODO 1.
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork3 = new Book3('deep work ', 'cal newport');

deepWork3.checkedOut = true; // TODO 1. Change the value

console.log(deepWork3);


// TODO 3. In TypeScript, if you want to use the shorthand for creating and initializing class properties in the constructor, you need to use public, private, or protected access modifiers.

class Book4 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
}



// ! *** Classes - Getters and Setters ***
// ? Getters and setters are special methods in a class that allow you to control how a property is accessed and modified.They are used like properties, not methods, so you don't use parentheses to call them.

class Book5 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }
  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork5 = new Book5('Deep Work', 'Cal Newport');
console.log(deepWork5.info);
console.log(deepWork5.someInfo);

// deepWork5.checkOut = true;
console.log(deepWork5.checkOut);



// ! *** Classes - Implement Interface ***
// ? In TypeScript, an interface is a way to define a contract for a certain structure of an object. This contract can then be used by a class to ensure it adheres to the structure defined by the interface.

// ? When a class implements an interface, it is essentially promising that it will provide all the properties and methods defined in the interface. If it does not, TypeScript will throw an error at compile time.

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const hipster = new Person('shakeAndBake', 100);
hipster.greet();




// TODO *** Tasks app ***
// ? The mini-project was created to practice some of the above concepts. The files are tasks.html in the basics folder, and tasks.css and tasks.ts in the src folder.