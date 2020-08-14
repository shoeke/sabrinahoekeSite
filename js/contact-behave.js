
$(document).ready(function() {
    $("body").css("display", "none")
    $("body").fadeIn(500);

    $("#hamburger").click(function(){
        $(".nav-mobile").slideToggle(400);
    })


});

/*
function hgsubmit() {

    var valid = 0;
    
    var fname = document.getElementById('fname');

    var lname = document.getElementById('lname');

    var email = document.getElementById('email');

    var message = document.getElementById('subject');

    var error = document.getElementById('error');

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var valEmail = filter.test(email.value);
    
    if (fname.value === "") {
      valid = 0;
      error.innerHTML = "First Name Required";
      error.style.display = "block";
    } else {
        error.style.display = "none";
        valid = 1;
    }

    if (lname.value === "") {
        valid = 0;
        error.innerHTML = "Last Name Required";
        error.style.display = "block";
      } else {
        error.style.display = "none";
        valid = 2;
      }
    
    if (message.value === "") {
      valid = 0;
      error.innerHTML = "Please enter a message";
      error.style.display = "block";
    } else {
      error.style.display = "none";
      valid = 3;
    }
    
    if (email.value === "") {
      valid = 0;
      error.innerHTML = "Please enter your email address";
      error.style.display = "block";
    } else {
      error.style.display = "none";
      valid = 4;
    }
    
    if(valEmail == false) {
      valid = 0;
      error.innerHTML = "Invalid email address";
      error.style.display = "block";
    } else if (valEmail == true) {
      error.display = "none";
      valid = 5;
    }
    
    if (valid !== 5) {
    alert("Please fill the required fields");
    }
    else if (valid == 5)  {
        alert("Thank you! Your message has been sent");
    }
  }*/