function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
}
getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });





// // this returns promise{10} bcz async always return promise 
async function fetchNumber() {
  return 10;
}
const x = fetchNumber();
console.log(x);




function getNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  })
}
async function showNumber() {
  const value = await getNumber();
  console.log(value);
}
showNumber();




async function getUserName() {
  await new Promise(resolve => setTimeout(resolve, 1000));
    return "Amina"
  
}
async function showName() {
  const name = await getUserName();
  console.log(name);
  
}
showName();



function bringNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
  });
}

bringNumber().then(value => {
  console.log("got value:", value);
}).catch(err => {
  console.log("error", err)
});

async function main() {
  try {
    const value = await bringNumber();
    console.log("got value:", value);
  } catch(err) {
    console.log("error", err)
  }
} 
main();


function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access granted");
      } else {
        reject("Access denied : too young");
      }
    }, 1000);
  });
}
checkAge(16)
  .then(result => console.log(result))
  .catch(err => console.log(err));


