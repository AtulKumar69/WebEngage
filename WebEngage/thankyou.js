

   document.addEventListener("DOMContentLoaded", function () {
     // Get values from URL
     const email = JSON.parse(localStorage.getItem("email"));
     const countryCode = JSON.parse(localStorage.getItem("countryCode"));
     const mobile = JSON.parse(localStorage.getItem("mobile"));

     // Validate email
     if (
       !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
         email
       )
     ) {
       const errorMessage = document.createElement("p");
       errorMessage.classList.add("error-message");
       errorMessage.innerText = "Invalid email address";
       document.querySelector(".form-container").appendChild(errorMessage);
     }

     // Validate mobile number
     if (!/^\d{10}$/.test(mobile)) {
       const errorMessage = document.createElement("p");
       errorMessage.classList.add("error-message");
       errorMessage.innerText = "Invalid mobile number";
       document.querySelector(".form-container").appendChild(errorMessage);
     }

     // Render values on page
     document.querySelector("#email").innerText = email;
     document.querySelector("#countryCode").innerText = countryCode;
     document.querySelector("#mobile").innerText = mobile;
   });