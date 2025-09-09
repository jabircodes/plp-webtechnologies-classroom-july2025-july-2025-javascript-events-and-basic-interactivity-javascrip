//dropdown content with eventlisteners
const dropBtn = document.getElementById("dropdownBtn");
const dropContent = document.getElementById("dropdownContent");

    dropBtn.addEventListener("click", () => {
    dropContent.style.display = (dropContent.style.display === "block") ? "none" : "block";
  });
  
//counter with eventlistener
let count = 0;
  const btn = document.getElementById("clickBtn");
  const counter = document.getElementById("count");

  btn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    if(count === 10) {
      alert("Max is 10 clicks!");
    }
  });

//3. addEventListener => attach an event handler to an element without overwriting existing handlers
let txtArea = document.getElementById("myTextArea");
txtArea.addEventListener("input", function() {
    console.log("Text area content: " + this.value);
});

txtArea.addEventListener("focus", function() {
    console.log("Text area focused");
});

txtArea.addEventListener("blur", function() {
    console.log("Text area lost focus");
});

txtArea.addEventListener("copy", function() {
    console.log("Text copied from text area");
});

txtArea.addEventListener("paste", function() {
    console.log("Text pasted into text area");
});

txtArea.addEventListener("keydown", function(event) {
    console.log("Key down: " + event.key);
});

txtArea.addEventListener("keyup", function(event) {
    console.log("Key up: " + event.key);
});

//toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark");   
}

//form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    //fetch form values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear previous errors
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    //validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    //validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    //validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including letters and numbers.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully! And that marks the end of week 6.");
        document.getElementById("myForm").reset();
    }

}