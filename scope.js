// this is global scope it can be accessed everywhere. global scopes are declares outside function
let name = 'Amina'
function greet() {
    console.log(name);
}
greet()
console.log(name); 



function greet() {
    let message = 'Hello';
    console.log(message);
}
greet()
// console.log(message); this is not defined bcz message can only live inside functoin




if (true) {
  let age = 24;
  console.log(age);
}

// console.log(age);
// age is local to block scope, age only axist inside can't be accessed outside bcz it's local scope



let t = 'Global Amina';
function greet(){
    let t = 'Local Amina';
    console.log(t)
}
greet();
console.log(t);
// when the variable names are same local scope overshadows global scope
// javascript always uses the closes variable it can find


let x = 1;

function test() {
  let x = 2;
  if (true) {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}

test();
console.log(x);

// printing started from 3 bcz (let x = 3) was the closest variable 
// followed by 2 and 1