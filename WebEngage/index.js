

const form = document.querySelector("form");
const email = document.querySelector("#email");
const countryCode = document.querySelector("#countryCode");
const mobile = document.querySelector("#mobile");
const emailError = document.querySelector("#email-error");
const countryCodeError = document.querySelector("#country-code-error");
const mobileError = document.querySelector("#mobile-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email.value === "" || email.value === null) {
    emailError.innerText = "Required field";
    emailError.classList.add("visible");
    emailError.classList.add("error");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    emailError.innerText = "You Entered an Invalid Email Address";
    emailError.classList.add("visible");
    emailError.classList.add("error");

    isValid = false;
  } else {
    emailError.classList.remove("visible");
  }
  const phoneRegex = /^\d{10}$/;
  if (mobile.value === "" || mobile.value === null) {
    if (countryCode.value === "" || countryCode.value === null) {
    }
    mobileError.innerText = "Required field";
    mobileError.classList.add("visible");
    mobileError.classList.add("error");
    isValid = false;
  } else if (mobile.value.length < 10 || mobile.value.length > 10) {
    mobileError.innerText = "Phone number should be 10 digits";
    mobileError.classList.add("visible");
    mobileError.classList.add("error");
    isValid = false;
  } else if (Number.isNaN(Number(mobile.value))) {
    mobileError.innerText = "Enter only numbers";
    mobileError.classList.add("visible");
    mobileError.classList.add("error");
    isValid = false;
  } else if (!phoneRegex.test(mobile.value)) {
    mobileError.innerText = "Please enter a valid phone number";
    mobileError.classList.add("visible");
    mobileError.classList.add("error");
    isValid = false;
  } else {
    mobileError.classList.remove("visible");
  }

  if (isValid) {
    // Submit the form
    // set stringify item in local storage
    // redirect to thankyou page
    localStorage.setItem("email", JSON.stringify(email.value));
    localStorage.setItem("countryCode", JSON.stringify(countryCode.value));
    localStorage.setItem("mobile", JSON.stringify(mobile.value));
    window.location.href = "thankyou.html";
  }
});