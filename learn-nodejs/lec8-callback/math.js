exports.add = (num1, num2) => {
    
    return num1 + num2;
}

exports.sub = (num1, num2 , cb) => {
    setTimeout( () => {
        console.log('-- before callback--');
        cb(num1 - num2);
        console.log('-- after callback--');
    }, 2000);
    
}