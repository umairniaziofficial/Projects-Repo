function validateForm() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    const nameEl = document.getElementById("name").value;
    const emailEl = document.getElementById("email").value;
    const passwordEl = document.getElementById("password").value;

    let isValid = true;

    if (nameEl.trim() === "") {
        document.getElementById("nameError").innerText = "Please Enter Your Username";
        isValid = false;
    }

    if (emailEl.trim() === "") {
        document.getElementById("emailError").innerText = "Please Enter Your Email";
        isValid = false;
    }
    else if (!isValidEmail(emailEl)) {
        document.getElementById("emailError").innerText = "Please Enter Right Format Email";
        isValid = false;
    }
    if (passwordEl.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        isValid = false;
    } else if (passwordEl.length < 6) {
        document.getElementById("passwordError").innerText = "Password should be at least 6 characters long";
        isValid = false;
    }

    return isValid;


};

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}