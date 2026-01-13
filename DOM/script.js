let title = document.querySelector("#title");
// title.textContent = "<span>Hello <strong>Amina</strong> 👋</span>";
// this will (texcontent) print the whole the tags included but will plain 
// both (textcontent) & (innerhtml) print same 
title.innerHTML = "<span>Hello <strong>Amina</strong> 👋</span>";
title.style.color = "blue";
title.style.textAlign = "center";


let p = document.querySelector(".message");
p.classList.add("highlight");
p.style.color = "green"

let list = document.querySelector("#list");
let newItem = document.createElement("li");
newItem.textContent = "mango";
list.appendChild(newItem);
let items = list.getElementsByTagName("li");
list.insertBefore(newItem, items[1])

let order = document.getElementById("order");
let stationary = order.getElementsByTagName("li");
order.removeChild(stationary[0]);



