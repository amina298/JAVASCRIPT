// why bracket in the result bcz we are creating new array
const firstArr = ["salma", "casha", "amina"];
const secondArr = ["cumar", "yunis", "fuat"];
const combinedArr = [...firstArr, ...secondArr];
console.log(combinedArr);

// this adds to the list (spread)
const user = { name: "Amina", age: 23 };
const updatedUser = { ...user, city: "Nairobi" };
console.log(updatedUser);

// when u declare variable that mean new array or object
const frst = { id: 210, name: "zara" };
const scnd = { id: 140, password: "passcord!" };
const both = { ...frst, ...scnd };
console.log(both);

const marks = [50, 30, 80];
console.log(...marks);

// rest example
const colors = ["red", "blue", "green", "yellow"];
const [first, second, ...restcolors] = colors;
console.log(first);
console.log(second);
console.log(restcolors);

// both rest and spread used at once
function showScores(firstScore, ...otherScores) {
  console.log("First score:", firstScore);
  console.log("Other scores:", otherScores);

  const allScores = [firstScore, ...otherScores];
  console.log("All scores:", allScores);
}

showScores(90, 85, 88, 92);

// rest examples
// rest must be the last thing  and it should appear only once

const numbers = [1, 2, 3, 4, 5];
const [positionOne, positionTwo, ...rest] = numbers;
console.log(positionOne);
console.log(positionTwo);
console.log(rest);


const profile = {
  name: "Ramla",
  age: 22,
  country: "Kenya",
  role: "developer"
}

const { name, ...others } = profile;
console.log(name);
console.log(others);


