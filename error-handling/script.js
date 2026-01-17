let btn = document.getElementById("btn");
let errorMsg = document.getElementById("error");
btn.addEventListener("click", () => {
    try {
        let username = document.getElementById("username").value;
    
        if (username === "") {
            throw "username is required";

        }
        errorMsg.textContent = "submitted successfully!";

    } catch (error) {
        errorMsg.textContent = error;
    }
});


document.getElementById("check").addEventListener("click", () => {
    try {
        let age = Number(document.getElementById("age").value);
        if (isNaN(age)) {
            throw "Age must be a number";
        
        }
        document.getElementById("result").textContent = "Valid age";
    } catch (err) {
        document.getElementById("result").textContent = err;

    }
});