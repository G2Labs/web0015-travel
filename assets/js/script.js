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

// load places
document.addEventListener('DOMContentLoaded', function() {
    const destinationList = document.getElementById('destination-list');

    // Inline JSON data
    const data = [
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053359/kitulgala_tzq7lj.jpg",  // Placeholder image path
            "city": "Kithulgala",
            "title": "Kithulgala",
            "description": "Kithulgala is a small town in the west of Sri Lanka, known for its lush greenery and as a location for white-water rafting."
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053360/yaala_m757nw.jpg",  // Placeholder image path
            "city": "Yaala",
            "title": "Yala National Park",
            "description": "Yala National Park is the most visited and second largest national park in Sri Lanka, known for its wildlife and variety of ecosystems."
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053361/udawalawa_nipb1b.jpg",  // Placeholder image path
            "city": "Udawalawa",
            "title": "Udawalawe National Park",
            "description": " Udawalawe National Park, is one of the best places in the world to see wild elephants."
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053363/wilpaththu_o7q6ml.jpg",  // Placeholder image path
            "city": "Wilpaththu",
            "title": "Wilpattu National Park",
            "description": "Wilpattu is world-renowned for its leopard (Panthera pardus kotiya) population"
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053361/trinco_f48iw4.jpg",  // Placeholder image path
            "city": "Trincomalee",
            "title": "Trincomalee",
            "description": "Trincomalee is a port city on the northeast coast of Sri Lanka, famous for its beautiful beaches and historical significance."
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053360/minneriya_cvkty2.jpg",  // Placeholder image path
            "city": "Minneriya",
            "title": "Minneriya National Park",
            "description": "Minneriya National Park is home to the world's largest known gathering of Asian elephants."
        },
        // {
        //     "image": "./assets/images/lotustower.jpg",
        //     "city": "Colombo",
        //     "title": "Lotus Tower",
        //     "description": "Lotus Tower, also referred to as Colombo Lotus Tower, is a 351.5 m tall tower, located in Colombo, Sri Lanka."
        // },
        // {
        //     "image": "./assets/images/gallefort.webp",
        //     "city": "Galle",
        //     "title": "Galle Fort",
        //     "description": "Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese."
        // },
        // {
        //     "image": "./assets/images/dalada.webp",
        //     "city": "Kandy",
        //     "title": "Temple Of The Tooth",
        //     "description": "Temple of the Sacred Tooth Relic, is a Buddhist temple in Kandy, Sri Lanka."
        // },
        // {
        //     "image": "./assets/images/peradeniya.webp",
        //     "city": "Kandy",
        //     "title": "Peradeniya Botanical Garden",
        //     "description": "Royal Botanic Gardens, Peradeniya are about 5.5 km to the west of the city of Kandy"
        // },
        // {
        //     "image": "./assets/images/unawatuna.webp",
        //     "city": "Galle",
        //     "title": "Unawatuna Beach",
        //     "description": "It's a popular destination for both locals and tourists, offering a range of activities like snorkeling, diving, and surfing"
        // },
        // {
        //     "image": "./assets/images/musium.jpg",
        //     "city": "Colombo",
        //     "title": "Colombo National Museum",
        //     "description": "The National Museum of Natural History is a museum that covers the natural heritage of Sri Lanka. "
        // }
    ];

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
<!--          <div class="card-rating">-->
<!--            <ion-icon name="star"></ion-icon>-->
<!--            <ion-icon name="star"></ion-icon>-->
<!--            <ion-icon name="star"></ion-icon>-->
<!--            <ion-icon name="star"></ion-icon>-->
<!--            <ion-icon name="star"></ion-icon>-->
<!--          </div>-->
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
        destinationList.appendChild(listItem);
    });
});

// Load packages
document.addEventListener('DOMContentLoaded', function() {
    const packageList = document.getElementById('package-list');

    // Inline JSON data for packages
    const packages = [
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053361/galle_zl9h8k.jpg",  // Placeholder image path
            "title": "Down South Sri Lanka - Galle",
            "description": "Experience the beauty of Galle with a 7-day, 6-night adventure. Perfect for a group of 10.",
            "duration": "7D/6N",
            "pax": 10,
            "location": "Galle, Sri Lanka",
            "reviews": 15,
            "price": "$"+93 * 7  // $93 per day
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053360/sigiriya_fid0aj.jpg",  // Placeholder image path
            "title": "Explore Sigiriya",
            "description": "Discover the ancient rock fortress of Sigiriya in a 3-day, 2-night trip, ideal for a group of 8.",
            "duration": "3D/2N",
            "pax": 8,
            "location": "Sigiriya, Sri Lanka",
            "reviews": 25,
            "price": "$"+93 * 3  // $93 per day
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053361/all-island_vlyqfl.png",  // Placeholder image path
            "title": "Full Island Tour",
            "description": "Embark on a comprehensive tour around the entire island of Sri Lanka. Duration and price are negotiable.",
            "duration": "Flexible",
            "pax": "Flexible",
            "location": "Sri Lanka",
            "reviews": 30,
            "price": "Negotiable"
        }
        // {
        //     "image": "./assets/images/packege-2.jpg",
        //     "title": "Summer Holiday To The Oxolotan River",
        //     "description": "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
        //     "duration": "7D/6N",
        //     "pax": 10,
        //     "location": "Malaysia",
        //     "reviews": 20,
        //     "price": 520
        // },
        // {
        //     "image": "./assets/images/packege-3.jpg",
        //     "title": "Santorini Island's Weekend Vacation",
        //     "description": "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
        //     "duration": "7D/6N",
        //     "pax": 10,
        //     "location": "Malaysia",
        //     "reviews": 40,
        //     "price": 660
        // }
        // Add more packages as needed
    ];

    // Loop through each package item
    packages.forEach(packageItem => {
        // Create elements for each package card
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="package-card">

                <figure class="card-banner">
                    <img src="${packageItem.image}" alt="${packageItem.title}" loading="lazy">
                </figure>

                <div class="card-content">

                    <h3 class="h3 card-title">${packageItem.title}</h3>

                    <p class="card-text">
                        ${packageItem.description}
                    </p>

                    <ul class="card-meta-list">

                        <li class="card-meta-item">
                            <div class="meta-box">
                                <ion-icon name="time"></ion-icon>
                                <p class="text">${packageItem.duration}</p>
                            </div>
                        </li>

                        <li class="card-meta-item">
                            <div class="meta-box">
                                <ion-icon name="people"></ion-icon>
                                <p class="text">pax: ${packageItem.pax}</p>
                            </div>
                        </li>

                        <li class="card-meta-item">
                            <div class="meta-box">
                                <ion-icon name="location"></ion-icon>
                                <p class="text">${packageItem.location}</p>
                            </div>
                        </li>

                    </ul>

                </div>

                <div class="card-price">
                  <!--   <div class="wrapper">
                        <p class="reviews">(${packageItem.reviews} reviews)</p>
                        <div class="card-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                    </div>-->
                    <p class="price">
                        ${packageItem.price}
                        <span>/ per person</span>
                    </p>
<!--                    <button class="btn btn-secondary">Book Now</button>-->
                </div>

            </div>
        `;

        // Append the created card to the package list
        packageList.appendChild(listItem);
    });
});


//Load vehicles
document.addEventListener('DOMContentLoaded', function() {
    const vehicleList = document.getElementById('vehicles-list');

    // Inline JSON data
    const data = [
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053359/hiace_p5xfrm.png",
            "title": "Hiace",
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737053359/prius_jypiai.png",
            "title": "Prius",
        },
        {
            "image": "https://res.cloudinary.com/dkznriytt/image/upload/v1737054011/web0015-travel/gxboaqq1tljutn4xqyms.png",
            "title": "Coster",
        },
        // {
        //     "image": "./assets/images/voxy.png",
        //     "title": "Voxy",
        // },
    ];

    // Loop through each destination item
    data.forEach(vehicle => {
        // Create elements for each destination card
        const listItem = document.createElement('li');
        listItem.innerHTML = `
      <div class="popular-card">
        <figure class="card-img">
          <img src="${vehicle.image}" alt="${vehicle.title}" loading="lazy">
        </figure>
        <div class="card-content">

          <h3 class="h3 card-title">
            <a href="#">${vehicle.title}</a>
          </h3>
        </div>
      </div>
    `;

        // Append the created card to the destination list
        vehicleList.appendChild(listItem);
    });
});
