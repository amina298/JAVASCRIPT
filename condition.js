

// let age = 20;
// if (age >= 18) {
//     console.log('You are an adult');
// } 


let age = 15
if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You are too young');
}

// if is false so j.s went for else which is true

let score = 75;
if (score >= 90) {
    console.log('Grade A');
} else if (score >= 70) {
    console.log('Grade B');
} else {
    console.log('Grade C');
}

// runs gade b and stops checking


// (Conditions with logical operators)

let marks = 20;
let hasId = true;
if (marks >= 18 && hasId) {
    console.log('You may enter');
} 

// with &&(AND) both condition must be true


let isMember = false;
let isAdmin = true;
if (isMember || isAdmin) {
    console.log('Access granted');

}

// with || (OR) at least one of the condition has to be true




let loggedIn = false;

if (!loggedIn) {
  console.log("Please log in");
}

// !(NOT) always gives the opposite (false to true) and vise vasa


let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;

  case "apple":
    console.log("Red");
    break;

  default:
    console.log("Unknown fruit");
}

//Apple runs bcz  j.s checks the condition case that matches 



// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start");
//   case "Tuesday":
//     console.log("Work");
// }


// break is very important without break j.s keeps running the next cases  both (start and work will be printed)
// (which is wrong)




// default example

let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Work day");
    break;

  case "Friday":
    console.log("Weekend soon");
    break;

  default:
    console.log("Enjoy your day");
}

// bcz there is no case for sunday
// N/B= switch uses === only 