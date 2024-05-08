function validateForm() {
    let firstNameInput = document.querySelector("#firstName");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");
    let submitButton = document.querySelector("#submit-btn");
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        let firstNameValue = firstNameInput.value.trim();
        let emailValue = emailInput.value.trim();
        let passwordValue = passwordInput.value.trim();

        // Check if first name is empty
        if (firstNameValue === "") {
            firstNameInput.style.backgroundColor = "red";
            firstNameInput.placeholder = "Please enter your first name";
            return;
        } else {
            firstNameInput.style.backgroundColor = "";
            firstNameInput.placeholder = "";
        }

        // Check if email is empty or missing @ sign
        if (emailValue === "") {
            emailInput.style.backgroundColor = "red";
            // emailInput.style.color = "white";
            emailInput.placeholder = "Please enter your email";
            return;
        } else if (!emailValue.includes("@")) {
            emailInput.style.backgroundColor = "red";
            emailInput.style.color = "white";
            emailInput.value = "";
            emailInput.placeholder = "Email must contain @ sign";
            return;
        } else {
            emailInput.style.backgroundColor = "";
            emailInput.placeholder = "";
        }

        // Check password requirements
        if (passwordValue === "") {
            passwordInput.style.backgroundColor = "red";
            passwordInput.placeholder = "Please enter your password";
            return;
        } else if  (passwordValue.length < 6) {
            passwordInput.style.backgroundColor = "red";
            passwordInput.value = "";
            passwordInput.placeholder = "Password must be at least 6 characters";
            return;
        } else if   (!(/[0-9]/.test(passwordValue))) {
            passwordInput.style.backgroundColor = "red";
            passwordInput.value = "";
            passwordInput.placeholder = "Include one number";
            return;
        } else if (!(/[!@#$%^&*]/.test(passwordValue))) {
            passwordInput.style.backgroundColor = "red";
            passwordInput.value = "";
            passwordInput.placeholder = "Include special character";
            return;
        }

        else {
            passwordInput.style.backgroundColor = "";
            passwordInput.placeholder = "";
        }

        // If all validations pass, submit the form
        // You can remove this line if you want to proceed with form submission
        alert("Form submitted successfully!");
        // document.getElementById("myForm").submit(); // Uncomment to submit the form
    });
}

// Call the validation function when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    validateForm();
});
