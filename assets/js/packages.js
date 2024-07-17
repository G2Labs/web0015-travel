document.addEventListener('DOMContentLoaded', function() {
    const packageList = document.getElementById('package-list');

    // Inline JSON data for packages
    const packages = [
        {
            "image": "./assets/images/galle.jpeg",  // Placeholder image path
            "title": "Down South Sri Lanka - Galle",
            "description": "Experience the beauty of Galle with a 7-day, 6-night adventure. Perfect for a group of 10.",
            "duration": "7D/6N",
            "pax": 10,
            "location": "Galle, Sri Lanka",
            "reviews": 15,
            "price": "$"+93 * 7  // $93 per day
        },
        {
            "image": "./assets/images/sigiriya.jpg",  // Placeholder image path
            "title": "Explore Sigiriya",
            "description": "Discover the ancient rock fortress of Sigiriya in a 3-day, 2-night trip, ideal for a group of 10.",
            "duration": "3D/2N",
            "pax": 8,
            "location": "Sigiriya, Sri Lanka",
            "reviews": 25,
            "price": "$"+93 * 3  // $93 per day
        },
        {
            "image": "./assets/images/all-island.png",  // Placeholder image path
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
