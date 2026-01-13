const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    alert("item add to chart");
});


const search = document.getElementById("search");
const output = document.getElementById("output");
search.addEventListener("input", () => {
    output.textContent = search.value;
});

const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("form submitted !");
});

const country = document.getElementById("country");
const result = document.getElementById("result");
country.addEventListener("change", () => {
    result.textContent = "You selected " + country.value;
})

const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        alert("searching for: " + searchBox.value);
    }
});


const card = document.getElementById("card");
card.addEventListener("mouseover", () => {
    card.style.backgroundColor = "lightgrey"
});
card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white"
});

const msg = document.getElementById("msg");
window.addEventListener("scroll", () => {
    if (window.scroll > 200) {
        msg.textContent = "You scrolled down!";
    }
});