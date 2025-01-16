'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


// Get the current year
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

//Validate calendar date
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get today's date in YYYY-MM-DD format
    var today = new Date().toISOString().split('T')[0];

    // Set min attribute for checkin and checkout inputs
    document.getElementById('checkin').setAttribute('min', today);
    document.getElementById('checkout').setAttribute('min', today);
});


//Contact us function
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tour-search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const loadingSpinner = document.getElementById('loading-spinner');

        // Show the loading spinner
        loadingSpinner.style.display = 'flex';

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            place: document.getElementById('place').value,
            people: document.getElementById('people').value,
            checkin: document.getElementById('checkin').value,
            checkout: document.getElementById('checkout').value
        };

        // Log form data to console
        console.log(formData);

        // Send form data to Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwrXH-joOGNl3iv69gW7Ka3BC-3-sNSuShIDwB2pPX7qApI3898_XBljMBACDDxDshG/exec'; // Replace with your Google Apps Script URL

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(result => {
                console.log('Success:', result);
                loadingSpinner.style.display = 'none';
                // Show SweetAlert success message
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submitted Successfully!',
                    text: 'Thank you for your inquiry.',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });

                // Optionally, reset the form after submission
                document.getElementById('tour-search-form').reset();

            })

            .catch(error => {
                console.error('Error:', error);
                loadingSpinner.style.display = 'none';
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed!',
                    text: 'There was an error submitting the form. Please try again later.',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            });




        // Optionally, reset the form after submission
        document.getElementById('tour-search-form').reset();
    });
});

//Auto scroll function
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}