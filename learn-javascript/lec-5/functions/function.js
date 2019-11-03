function addition(num1 ) {
    return function(num2) {
         return num1 + num2;
		 }
    
 }
 
 var innerFunc = addition(2);
 var secondInnerFunc = innerFunc(3);
 console.log(addition);

 var funcExp = function() {
	console.log('we are testing function expression.');
 }

 funcExp();
 
var getDouble = num => {
	return num * num;
}
console.log(getDouble(6));