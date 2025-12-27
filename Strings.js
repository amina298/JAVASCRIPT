// these are 4 ways of creating strings('', "", ``,  new string)

let name = 'Amina';
let city = "Nairobi";
let greeting = `Hello`;
let hobby = new String('reading')
let info = `${greeting}, my name is ${name}. i live in ${city} and i enjoy ${hobby}.`;
console.log(info);

// how many characters are in a string LENGTH
let word = 'javascript'
console.log(word.length);


// index counting starts from zero
let text = 'Hello'
console.log(text[0]);
console.log(text[4]);

//toUpperCase / toLowerCase
let message = 'Sign up';
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// trim()
// removes space from start & end
let email = ' test@gmail.com  ';
console.log(email.trim());

// includes()
// checks if something is included
let sentence = 'javascript requires more than six senses'
console.log(sentence.includes('requires'));
console.log(sentence.includes('takes'));

// Slice()
// ✅ Start index → included
// ❌ End index → excluded
let wording = 'parameters';
console.log(wording.slice(0, 4));
console.log(wording.slice(4)); 
console.log(wording.slice(-5, -3));
console.log(wording.slice(3, 2));  
// console.log(wording.slice(3, 2)); if start > end slice prints nothing
// negative slice starts counting from the end

// replace()
let song = 'my world';
console.log(song.replace('world', 'space'));

// return the character at a specified index
var fullName = "Ruqia Ali"
console.log(fullName.charAt(6));

// concat()
// put together
var firtName = 'Sumeya ';
var serName = 'Ali'
console.log(firtName.concat(serName)); 

// starstwith() and endswith()
var team = 'paramedic';
console.log(team.startsWith('para'));
console.log(team.endsWith('ty'));


