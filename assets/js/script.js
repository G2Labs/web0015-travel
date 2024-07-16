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


//places
document.addEventListener('DOMContentLoaded', function() {
  const destinationList = document.getElementById('destination-list');

  // Fetch data from JSON file
  fetch('assets/js/destinations.json')
      .then(response => response.json())
      .then(data => {
        // Loop through each destination item
        data.forEach(destination => {
          // Create elements for each destination card
          const listItem = document.createElement('li');
          listItem.innerHTML = `
          <div class="popular-card">
            <figure class="card-img">
              <img src="${destination.image}" alt="${destination.title}" loading="lazy">
            </figure>
            <div class="card-content">
              <div class="card-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <p class="card-subtitle">
                <a href="#">${destination.city}</a>
              </p>
              <h3 class="h3 card-title">
                <a href="#">${destination.title}</a>
              </h3>
              <p class="card-text">
                ${destination.description}
              </p>
            </div>
          </div>
        `;

          // Append the created card to the destination list
          console.log(listItem)
          destinationList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching destinations:', error));
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
    });
});
