function showName() {
  const value = document.getElementById("nameInput").value;
  document.getElementById("result").textContent = "Hello " + value + " 👋";
}