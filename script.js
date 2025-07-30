// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const timestamp = new Date().toLocaleString();

  const newMessage = { name, email, message, timestamp };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message sent!");
  this.reset();
});

// Admin login
function adminLogin() {
  const password = document.getElementById("adminPassword").value;
  if (password === "admin123") {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("responsesSection").style.display = "block";
    showMessages();
  } else {
    alert("Wrong Password!");
  }
}

// Show stored messages
function showMessages() {
  const responseList = document.getElementById("responseList");
  responseList.innerHTML = "";
  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  if (messages.length === 0) {
    responseList.innerHTML = "<p>No responses yet.</p>";
    return;
  }

  messages.forEach((msg, idx) => {
    const msgDiv = document.createElement("div");
    msgDiv.innerHTML = `
      <strong>#${idx + 1}</strong><br/>
      <b>Name:</b> ${msg.name} <br/>
      <b>Email:</b> ${msg.email} <br/>
      <b>Message:</b> ${msg.message} <br/>
      <b>Time:</b> ${msg.timestamp}
      <hr/>
    `;
    responseList.appendChild(msgDiv);
  });
}
