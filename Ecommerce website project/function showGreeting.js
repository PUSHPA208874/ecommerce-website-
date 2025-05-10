document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");
  
    if (name === "" || email === "") {
      message.textContent = "Please fill out all fields.";
      message.style.color = "red";
    } else {
      message.textContent = `Thanks for registering, ${name}!`;
      message.style.color = "green";
    }
  });
    