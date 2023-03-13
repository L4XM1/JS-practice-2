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

//loop through array

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  //better for arrays
  console.log(todo.text);
}

//high order array methods - forEach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const todoCompleated = todos
  .filter(function (todo) {
    return todo.isCompleated === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleated);

//conditionals

const first = 20;

if (first === 10) {
  console.log("first is 10");
} else if (first > 10) {
  console.log("first is greater than 10");
} else {
  console.log("first is less than 10");
}

const second = 4;
const third = 11;

if (x > 6 && third > 10) {
  console.log("second is more than 5 or third is more than 10");
} // so we don't nest ifs

//ternary operator

const fourth = 10;

const color = fourth > 10 ? "red" : "blue"; //if it's true red, if not blue
console.log(color);

//switch

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

//functions

function addN(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addN(5, 4));

const addNums = (num1) => num1 + 5;

console.log(addNums(5));

todos.forEach((todo) => console.log(todo));

//OOP es5 (pre classes)
//Constructor functions

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//instantiate an object

const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Marry", "Smith", "3-6-1970");

console.log(person2.firstName);
console.log(person2.getBirthYear());

console.log(person1.getFullName());
console.log(person1);

//class

class Persons {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//DOM manipulation

//single element
const form = document.getElementById("my-form");
console.log(document.querySelector(".container"));

console.log(form);

//multiple element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item")); //html collection
console.log(document.getElementsByTagName("li")); //html collection

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Marta";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
btn.style.background = "green";

btn.addEventListener("click", (e) => {
  // e.preventDefault();
  // console.log(e.target.className);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  // ul.lastElementChild.innerHTML = "<h1>Adding hello from js</h1>";
});

//form

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  console.log(nameInput.value);

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList.remove("error");
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
