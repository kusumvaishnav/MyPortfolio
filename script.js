let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 80,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 60,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 10,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
}); 

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.querySelector(".contact .c-btn");
  
  if (!submitButton) {
    console.error("Submit button not found!");
    return;
  }
  
  submitButton.addEventListener("click", function() {
    const nameInput = document.querySelector(".contact input[placeholder='Name']");
    const emailInput = document.querySelector(".contact input[placeholder='E-mail']");
    const phoneInput = document.querySelector(".contact input[placeholder='Mobile No.']");
    const messageInput = document.querySelector(".contact textarea[placeholder='Message']");
    
    if (!nameInput || !emailInput || !phoneInput || !messageInput) {
      console.error("Form inputs not found!");
      return;
    }
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();
    
    let isValid = true;
    
    if (name === "") {
      displayError(nameInput, "Please enter your name");
      isValid = false;
    } else {
      removeError(nameInput);
    }
    
    if (email === "") {
      displayError(emailInput, "Please enter your email");
      isValid = false;
    } else if (!isValidEmail(email)) {
      displayError(emailInput, "Please enter a valid email address");
      isValid = false;
    } else {
      removeError(emailInput);
    }
    
    if (phone === "") {
      displayError(phoneInput, "Please enter your mobile number");
      isValid = false;
    } else if (!isValidPhone(phone)) {
      displayError(phoneInput, "Please enter a valid mobile number");
      isValid = false;
    } else {
      removeError(phoneInput);
    }
    
    if (message === "") {
      displayError(messageInput, "Please enter your message");
      isValid = false;
    } else {
      removeError(messageInput);
    }
    
    if (isValid) {
      showSuccessMessage();
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      messageInput.value = "";
    }
  });
  
  function displayError(inputElement, message) {
    removeError(inputElement);
    
    inputElement.classList.add("is-invalid");
    
    
    const errorElement = document.createElement("div");
    errorElement.className = "invalid-feedback";
    errorElement.style.display = "block"; 
    errorElement.textContent = message;
    
    inputElement.parentNode.appendChild(errorElement);
  }
  
  function removeError(inputElement) {
    
    inputElement.classList.remove("is-invalid");
    
    const errorElement = inputElement.parentNode.querySelector(".invalid-feedback");
    if (errorElement) {
      errorElement.remove();
    }
  }
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
  
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  }
  
 
  function showSuccessMessage() {
    const contactFormContainer = document.querySelector(".contact-form");
    

    const successMessage = document.createElement("div");
    successMessage.className = "alert alert-success mt-3";
    successMessage.textContent = "Thank you! Your message has been sent successfully.";
    
    const existingMessage = contactFormContainer.querySelector(".alert");
    if (existingMessage) {
      existingMessage.remove();
    }
  
    contactFormContainer.appendChild(successMessage);

    setTimeout(function() {
      successMessage.remove();
    }, 5000);
  }
});