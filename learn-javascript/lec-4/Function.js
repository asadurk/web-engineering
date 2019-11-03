function log(content) {
    var textDiv = document.getElementById("text-container");
    textDiv.textContent = content;
}

var num4 = 6;

function addition(num, num2, num3) {
    num4 = 3;
    var result = num + num2;
    if(num3 != undefined) {
        result = result + num3;
    }
    if(num4 != undefined) {
        result = result + num4;
    }
    return result;
}

var result = addition(1,2,3);
log(result);

console.log(num4);














