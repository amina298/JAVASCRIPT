import { changeTitle, showMessage, changeBackground, appName } from "./utils.js";

console.log(appName)


const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    changeTitle();
    showMessage("Hello! this confirms import/export is workin!");
});



const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
    changeBackground("lightblue");
});

const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", () => {
    showMessage("Another alert from utils.js module!")
});
import calc from "./calculator.js"
console.log("5+3=", calc.add(5, 3));


console.log("10-4=", calc.subtract(10, 4));
console.log("6*7=", calc.multiply(6, 7));
console.log("20/5=", calc.divide(20, 5));
console.log("10/0=", calc.divide(10, 0));
