// For loop 
var students = ['Leila', 'Meimuna', 'Asha', 'Nadia'];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    
}

// let i = 1 → start

// i <= 5 → condition (if true, run)

// console.log(i) → runs

// i++ → increase by 1

// Repeat until condition is false

// while loop
// variables are declared outside of the loop
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
// If you forget i++, the loop will run forever



// for in loops through index and value 
// not ideal for array if only value is needed 
let user = {
  name: "Amina",
  city: "Nairobi",
  age: 22,
};

for (let key in user) {
  console.log(key); // property name
  console.log(user[key]); // property value
}


// (for of) prints only values
let city = "NAIROBI";

for (let letter of city) {
  console.log(letter);
}


// (do while) will run through the loop once even if the condition is false 
let number = 10;

do {
  console.log(number);
} while (number < 5);


