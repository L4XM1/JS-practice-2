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
