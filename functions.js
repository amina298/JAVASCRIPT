function sayHello() {
    console.log('Hello!')
}
sayHello()

// function with parameters

function greet(name) {
    console.log('Hello ' +  name);
}
greet('Amina') 
greet('Salma')

// function that returns value

function add(a, b) {
    return a + b;
}
let result = add(3,4)
console.log(result);



function rectangleArea(width, height) {
    return width * height;
}
console.log(rectangleArea(3, 5));


// only 5 will be printed bcz once javascript hits return, the function stops
function test() {
    return 5;
    console.log('Hi');
}
console.log(test())

// function is a reusable block of code
// u create function once and call it so many times
function greet(name) {
    return 'Hello ' + name;
    
}
console.log(greet('Sofia'));
console.log(greet('Zara'));
console.log(greet('Maria'));


function patientInfo(firstName, lastName, age, conditon) {
    var patientInfo
    patientInfo = firstName + " " + lastName;
    patientInfo += ' is' +  age  +  'years old ';
    patientInfo += 'she is suffering from ' + conditon;
    return patientInfo;
} 

console.log(patientInfo('Ruman', 'Ali', 32, 'Diabetes'))

