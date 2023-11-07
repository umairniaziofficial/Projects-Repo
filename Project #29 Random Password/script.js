const GenerateEl = document.getElementById("Generator");
const CopyTextEl = document.getElementById("copytext");

function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function copyToClipboard() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  alert("Password copied to clipboard: " + passwordField.value);
}

GenerateEl.addEventListener("click", function () {
  const lengthEl = document.getElementById("Select").value;

  const passwordField = document.getElementById("password");
  const generatedPassword = generatePassword(lengthEl);
  passwordField.value = generatedPassword;
});

CopyTextEl.addEventListener("click", copyToClipboard);
