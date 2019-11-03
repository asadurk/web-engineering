function log(content) {
    var textDiv = document.getElementById("text-container");
    textDiv.textContent = content;
}
function getData(arr) {
     var result = "";
    for(var i = 0; i < arr.length; i++) {
        result = result + "," + arr[i];
    }
    return result.substr(1);
}
var num = [12,22];
num.push(3);
var result = "AFter push : ";
result += getData(num);
log(result);
result += "After pop";
num.pop();
result += getData(num);
log(result);

result += "After unshift : ";
num.unshift(5);
result += getData(num);
log(result);

result += "After shift : ";
num.shift();
result += getData(num);
log(result);




