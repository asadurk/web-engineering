// const math = require('./math');

// console.log('--- Before addition----');
// console.log(math.add(2,2));
// console.log('--- After addition----');

// console.log('-- Before subtraction --');
// math.sub(2, 0, (result)=> {
//     console.log(result);
// })
// console.log('-- after subtraction --');

const regex = /(let|var|function).*/gm;
const str = `let i = 0;
j = 4;
var k = "asad";

function abc() {

}
abc  function aa() {
      
  }

c = function x() {

}

abc();`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

