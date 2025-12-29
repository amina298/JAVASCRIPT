// Arrays allow to store multiple data in single variable
// index starts from 0
let fruits = ['Mango', 'Banana', 'kiwi', 'Orange'];
console.log(fruits[0]);
console.log(fruits[3])
console.log(fruits[5]); 
// Arrays are mutable (can be changed ) unlike strings
fruits[1] = 'watermelon';
console.log(fruits);
// to know how many items are inside 
console.log(fruits.length);



let students = ['Salma', 'Ramla', 'Sofia', 'Maida'];
students.push('Ruweida');
console.log(students); 
// push() adds to the end 
students.pop('Ruweida');
console.log(students); 
// pop() removes from the end
students.unshift('Amina');
console.log(students); 
// unshift() adds to the beginning
students.shift('Amina');
console.log(students); 
// shift() removes from beginning


// sorting elements in an array alphabetically 
let workers = ['zeitun', 'Ali', 'Cumar', 'Ruqiya', 'Yahya'];
workers.sort()
console.log(workers); 


// find()
// Which number is the first one that matches the condition?
// =>  and >= are two different things (=> is a function shorthand and >= is a comparison operator)
let ages = [12, 18, 21, 16, 25];

let result = ages.find((age) => age >= 18);
console.log(result);


let nums = [2, 4, 6, 9, 12];

let answer = nums.find((n) => n % 2 !== 0);
console.log(answer);


// "Ali" → length 3 ❌

// "Amina" → length 5 ❌ (remember > 5, not ≥ 5)

// "Hassan" → length 6 ✅ ← first match, stop

let names = ["Ali", "Amina", "Hassan", "Mary"];
let longName = names.find((name) => name.length > 5);
console.log(longName);



// filter() only numbers grater than were kept. filter always returns array
let numbers = [1, 3, 5, 7, 9];

let outcome = numbers.filter((num) => num > 5);

console.log(outcome);

// creating array from existing values
let counting = [1, 2, 3, 4];

let doubled = counting.map(function (num) {
  return num * 2;
});

console.log(doubled);

// reverse()
let position = [1, 2, 3];
position.reverse()
console.log(position);

// converting string to an array
// split by character
let text = "hello";

let arr = text.split("");

console.log(arr);


// split by comma
let data = "apple,banana,orange";

let produce = data.split(",");

console.log(produce);

// using spread operator
let word = "Amina";

let letters = [...word];

console.log(letters);

// converting array to string 
let term = ["h", "e", "l", "l", "o"];

let say = term.join("");

console.log(say);