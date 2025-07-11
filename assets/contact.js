(function () {
  emailjs.init("elVkuz72e3FtpQ-CH");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const statusSpan = document.getElementById("form-status");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // REGEX patterns
  const namePattern = /^[a-zA-Z\s]{2,}$/; // at least 2 letters/spaces
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email check

  // Clear previous
  statusSpan.textContent = "";

  // Validate name
  if (!namePattern.test(name)) {
    statusSpan.textContent = "❌ Please enter a valid name (letters only)";
    nameInput.focus();
    return;
  }

  // Validate email
  if (!emailPattern.test(email)) {
    statusSpan.textContent = "❌ Please enter a valid email address";
    emailInput.focus();
    return;
  }

  // Validate message
  if (message.length < 10) {
    statusSpan.textContent = "❌ Message must be at least 10 characters long";
    messageInput.focus();
    return;
  }

  // ✅ If all pass, start countdown and send
  let countdown = 3;
  statusSpan.textContent = `⏳ Sending message in ${countdown}...`;

  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      statusSpan.textContent = `⏳ Sending message in ${countdown}...`;
    }
  }, 1000);

  emailjs.sendForm("service_05aa6rk", "template_h3e0r1k", this)
    .then(() => {
      clearInterval(interval);
      statusSpan.textContent = "✅ Sent successfully!";
      this.reset(); // clear form
    })
    .catch(() => {
      clearInterval(interval);
      statusSpan.textContent = "❌ An error occurred, try sending again.";
    });
});

