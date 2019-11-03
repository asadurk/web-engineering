const myFirstObj = {
    name : 'Asad',
    'father name': 'Rafiq',
    occ: 'Software Engineer',
    hobby:{ 
        1: 'Web Engineering',
        2: 'Reading'
    }
};

myFirstObj.occ = 'Student';
myFirstObj.class = 1;
myFirstObj.hobby[1] = "Mobile Engineering";

console.log(myFirstObj);

