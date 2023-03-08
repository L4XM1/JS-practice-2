console.log("Hello World");
console.error("Hello World");
console.warn("Hello World");

//var, let, const

let age = 30;
age = 31;

console.log(age);

const youHaveTo = "add a value to const";

//data types

//string, number, boolean, null, undefined

const name = "John";
const ageTwo = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof ageTwo);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); //object!!!

//concatenation

console.log("My name is " + name + " and I am " + age);

//template string

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = "technology, computers, it, code";
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(","));

//arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5); //constructor
console.log(numbers);

const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits[1]); //zero based

fruits[3] = "grapes";
console.log(fruits);

fruits.push("mangos"); //add last
fruits.unshift("strawberries"); //add first
console.log(fruits);

fruits.pop(); //pops last one off
console.log(Array.isArray(fruits));
console.log(Array.isArray("hello"));
console.log(fruits.indexOf("oranges"));

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//destructuring

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(firstName);

console.log(city);

person.email = "john@gmail.com"; //add property

console.log(person);

const todos = [
  {
    Id: 1,
    text: "Take out trash",
    isCompleated: true,
  },
  {
    Id: 2,
    text: "Meeting with boss",
    isCompleated: true,
  },
  {
    Id: 3,
    text: "Dentist appt",
    isCompleated: false,
  },
];

console.log(todos);
console.log(todos[1].text);

//JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for

for (let i = 0; i < 10; i++) {
  console.log(`For loop number: ${i}`);
}

//while

let i = 0;
while (i < 10) {
  console.log(`While loop number: ${i}`);
  i++;
}
