console.log("Practice1.js");

let globalVariable = "Im global variable";
let localVariable = "Im local variable";
function myFunction() {
    let localVariable = "Im local variable";


    // This function can access globalVariable
    console.log(globalVariable);
    console.log(localVariable);
}

//console.log(globalVariable);
//console.log(localVariable);
//localVariable is working outside of the function because of "Let localVariable" on the top of the JS
//LocalVariable within the function will only work within the function if "Let is not used". If Let is used variable can be used inside and outside of the function bracket

//Invoking myFunction()
//myFunction();

console.log("------");
console.log("Arrays");
// An array is a special variable, which can hold more than one value

// Declaring 1 variable (old way)
    let user1 = "Leo";
    let user2 = "John";
    let user3 = "Roy";
    let user4 = "Mark";

// Syntax
// item 1 = position 0, item 2 = position 1, item 3 = position 2, item 4 = position 3
// index is 0,1,2,3
//let arrayName =[item1, item2, item3, item4,...arrayName.];
// Using array is Declaring many variables example: let users = ["Leo", "John", "Roy", "Mark"];

let users = ["Leo", "John", "Roy", "Mark"];
console.log(users);
console.log(users[0]);
console.log(users.length);  //length = property that contains lenght

// Creating a new array
let colors = [];
colors[0] = "Blue";
colors[1] = "Red";
colors[2] = "Pink";
colors[3] = "Green";
colors[4] = "Gray";
console.log(colors);
console.log(colors[2]);
console.log(`I have ${colors.length} colors`);

// Not good practice to combine elements "Car, #, Color"
let myArray = ["Car", 22, true, 3.1416, "Purple"];
console.log(myArray);
console.log(myArray[3]);
console.log("I have" + myArray.length + "Items");

//OBJECTS LITERALS
console.log("-----");
console.log("Objects literals");
// Is a specific type of value in JavaScript that can have connections with other values
// An Objects literal usually consists of a list of comma-separated name-value pairs (property:value), wrapped inside curly backets*/

/* Syntax

let objectName = {
    property: value,
    property: value,
    ...
}

*/

let student = {
    name: "John",
    lastName: "Doe",
    age: 30,
    email: "john@gmail.com",

};

let student2 = {
    name: "Jennifer",
    lastName: "Ortega",
    age: 40,
    email: "jennifer@gmail.com",

};

let student3 = {
    name: "Peter",
    lastName: "Parker",
    age: 18,
    email: "peter@gmail.com",
};

// Access to obj properties which are: name, lastName, age, email...etc..
console.log(student.name);
console.log(student.lastName);
console.log(student.age);
console.log(student.email);

console.log(`Hello I am ${student.name} ${student.lastName}`);

//console.log access starts with: Variable(student) then Property(name..etc)
console.log(student2.email);
console.log(student3.lastName);

// define an array of objects
// way 1
let students = [student, student2, student3];
console.log(students[1]);

//to access individual property and item
console.log(students[2].email);

// way 2
let newStudents = [
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      email: "john@gmail.com",
    },
  
    {
      name: "Jennifer",
      lastName: "Ortega",
      age: 40,
      email: "jennifer@gmail.com",
    },
  
    {
      name: "Peter",
      lastName: "Parker",
      age: 18,
      email: "peter@gmail.com",
    },
  ];
  
  console.log(newStudents);

