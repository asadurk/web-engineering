/*
Template literals
*/
let age = 25;
let name = 'ali';
let occ = 'student';

const print = name + ' is a ' + occ  + " and he is  " + age + " years old.";
//Concatenation using template literal
const printUsingTL = `${name} is a ${occ} and he is ${age} years old.`;
console.log(print);
console.log(printUsingTL);

/*
Destructuring
*/
console.log('---- Destructuring ----');
let nameArr = ["Ali", "Najeeb", "Saad", "Ahmed", "Adarsh", "Fahad"];
let name1 = nameArr[0];
let name2 = nameArr[1];
let name3 = nameArr[2];

let [name4, name5, name6] = nameArr;

console.log(name4, name5, name6);

let personObj = {
    name7: "Ali new",
    city1: "Karachi",
    country1: "Pakistan"
};

let personName = personObj.name;
let city = personObj.city;
let country = personObj.country;

let {name8, city1, country1} = personObj;
console.log(name8);

/*
Default
*/

function greet(name = 'Asad') {
    console.log('Assalam o alikum ' + name);
}

greet('Ahmed');
greet();

function introUsingOb({name="Saad", from="Pakistan"} = {}) {
    console.log(`I am ${name} from ${from}`);
}

introUsingOb({});
introUsingOb({name:"Taha"});
introUsingOb();









