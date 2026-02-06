const user1 = {
  name: "Amina",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};

const user2 = { name: "Salma" };

// ------------------------------
// 1️⃣ bind() → returns a NEW function with 'this' fixed
// ------------------------------
const greetAmina = user1.greet.bind(user1, "Hello"); // partially apply greeting
greetAmina(); // Output: "Hello, Amina"

const greetSalma = user1.greet.bind(user2);
greetSalma("Hi"); // Output: "Hi, Salma"

// ------------------------------
// 2️⃣ call() → calls function immediately with specified 'this'
// ------------------------------
user1.greet.call(user2, "Hey"); // Output: "Hey, Salma"
user1.greet.call(user1, "Welcome"); // Output: "Welcome, Amina"

// ------------------------------
// 3️⃣ apply() → like call(), but arguments passed as array
// ------------------------------
user1.greet.apply(user2, ["Good morning"]); // Output: "Good morning, Salma"
user1.greet.apply(user1, ["Good night"]); // Output: "Good night, Amina"
