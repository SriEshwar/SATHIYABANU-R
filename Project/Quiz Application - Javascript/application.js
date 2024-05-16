function myMenuFunction() {
  var i = document.getElementById("navMenu");

  if(i.className === "nav-menu") {
      i.className += " responsive";
  } else {
      i.className = "nav-menu";
  }
 }

 var a = document.getElementById("loginBtn");
 var b = document.getElementById("registerBtn");
 var x = document.getElementById("login");
 var y = document.getElementById("register");

 function login() {
     x.style.left = "4px";
     y.style.right = "-520px";
     a.className += " white-btn";
     b.className = "btn";
     x.style.opacity = 1;
     y.style.opacity = 0;
 }

 function register() {
     x.style.left = "-510px";
     y.style.right = "5px";
     a.className = "btn";
     b.className += " white-btn";
     x.style.opacity = 0;
     y.style.opacity = 1;
 }

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // Function to validate login form
function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if username is empty
  if (username===password) {
      // alert("Please enter your username or email.");
      // return false;
      window.location.href="quiz.html";
  }else{
    alert("Please enter the details");
  }
}
  // Check if password is empty
  // if (password.trim() === "") {
  //     alert("Please enter your password.");
  //     return false;
  // }

  // // If all checks pass, return true to allow form submission
  // return true;
// }

// Function to validate registration form
function validateRegistrationForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  // Check if first name is empty
  if (firstName.trim() === "") {
      alert("Please enter your first name.");
       var first= false;
  }

  // Check if last name is empty
  if (lastName.trim() === "") {
      alert("Please enter your last name.");
     var last = false;
  }

  // Check if email is empty
  if (email.trim() === "") {
      alert("Please enter your email.");
      var email= false;
  }

  // Check if password is empty
  if (password.trim() === "") {
      alert("Please enter your password.");
      var password = false;
  }

  // If all checks pass, return true to allow form submission
  return true;
}

// if(first==true && last == true && email==true && password == true){
//   alert("Registration is successfully ")
// }
// else{
//   alert("Enter the correct details")
// }
// }