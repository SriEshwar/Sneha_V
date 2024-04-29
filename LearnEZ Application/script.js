function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  } else {
    return true; // Form will submit if all fields are filled
  }
}

function loginRedirect() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username !== "" && password !== "") {
    window.location.href = "homepage.html";
  } else {
    alert("Please fill in all fields.");
  }
}

function validateForm() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (fullname === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  } else {
    // You can add additional validation here if needed
    return true; // Form will submit if all fields are filled
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var signUpForm = document.querySelector("form");
  signUpForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      window.location.href = "homepage.html";
    }
  });
});
