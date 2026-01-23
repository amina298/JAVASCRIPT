export function changeTitle() {
    const title = document.getElementById("title");
    title.textContent = "title changed using ES module!";
}
export function showMessage() {
    alert("Hello from utils.js module")
}
export function changeBackground(Color){
    document.body.style.background = Color;
}
export const appName = "Modules practice App";
