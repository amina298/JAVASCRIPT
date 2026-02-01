// maps => they follow the insertion order, they are iterable unlike object which are not by default
const map = new Map();
map.set("Amina", "Admin");
map.set("Salma", "User");
console.log(map.get("Amina"));
console.log(map.size)
console.log(map.has("Salma"))

// Number Keys
const map = new Map();
map.set(1, "first");
map.set(2, "second");
console.log(map.get(2));

// // object as map
const user1 = { name: "Zara" };
const user2 = { name: "Leila" };
const map = new Map();
map.set(user1, "Admin");
map.set(user2, "user");
console.log(map.get(user1));

// map with set as value
const userSkills = new Map();
userSkills.set("Ali", new Set(["js", "css"]));
userSkills.set("Salwa", new Set(["Html", "css"]));
console.log(userSkills.get("Ali"));

// Iterating or looping through
for (let value of userSkills.values()) {
    console.log(value);
}
for (let key of userSkills.keys()) {
    console.log(key);
}
 
// Sets => don't allow duplicate, they follow insertion order
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2);
console.log(numbers);
console.log(numbers.size);

// creat a set from array
const arr = ["js", "css", "js", "html"];
const uniqueSkills = new Set(arr);
console.log(uniqueSkills);

// check if a value exists
// two valid ways to create a set
// adding one at a time using (.add)
const users = new Set();
users.add("Amina");
users.add("casha");
console.log(users);
console.log(users.has("salma"));

// All at once using (Array inside)
const admins = new Set(["Alia", "Maria", "Ramla"]);
console.log(admins)







