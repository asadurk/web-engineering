var num1 = 5; // declaration + initialization
var num2 = 5; 

//Addition
console.log("Addition");
var result = num1 + num2;
console.log(result);

//Subtraction
console.log("Subtraction");
result = num1 - num2;
console.log(result);

//Multiplication
console.log("Multiplication")
result = num1 * num2;
console.log(result);

//Division
console.log("Division")
result = num1 / num2;
console.log(result);


console.log("Addition with constant 1");
var num3 = 5;
num3 = num3 + 1;
console.log(num3);

console.log("Addition with constant 2");
num3 = num3 + 2;
console.log(num3);

console.log("Operation Postifix ++");
num3++;//postfix increment
console.log(num3);

console.log("Operation +=1");
num3+=1;
console.log(num3);

console.log("Operation prefix ++");
++num3;
console.log(num3);

console.log("Test prefix and postfix");
console.log(num3++);//postfix
console.log(num3);

console.log(++num3);

num3+= 2;
console.log(num3);

console.log("Learning remainder");
var divide = 15;
var divisior = 4;
result = divide % divisior;
console.log(result);

console.log("-- string's operation --");
var name = "asad is teaching javascript.";
console.log('name: ', name);

console.log(name + 1);

console.log(1 + 2 + name);
console.log(name + 1 + 2);

console.log("Accessing string characters using square bracket[] and indexes");
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

console.log("-- Finding string's length --");
console.log(name.length);

console.log("-- printing last character of a string --");
console.log(name[name.length - 2]);


console.log("-- Editing value of string using indexes");
name[0] = 'A';
console.log(name);

name = "Asad is teaching javascript.";
console.log(name);






























