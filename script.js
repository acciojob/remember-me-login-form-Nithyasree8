//your JS code here. If required.
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkboxInput = document.getElementById("checkbox");
const submitInput = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check for existing saved details
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  existingBtn.style.display = "block";
}

// Event listener for submit button
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (checkboxInput.checked) {
    // Save username and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove stored username and password from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  // Display alert with logged-in username
  alert(`Logged in as ${username}`);
});

// Event listener for existing user login button
existingBtn.addEventListener("click", () => {
  const existingUsername = localStorage.getItem("username");
  alert(`Logged in as ${existingUsername}`);
});
