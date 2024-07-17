document.addEventListener('DOMContentLoaded', function() {
    const destinationList = document.getElementById('destination-list');

    // Inline JSON data
    const data = [
        {
            "image": "./assets/images/kitulgala.jpg",  // Placeholder image path
            "city": "Kithulgala",
            "title": "Kithulgala",
            "description": "Kithulgala is a small town in the west of Sri Lanka, known for its lush greenery and as a location for white-water rafting."
        },
        {
            "image": "./assets/images/yaala.jpg",  // Placeholder image path
            "city": "Yaala",
            "title": "Yala National Park",
            "description": "Yala National Park is the most visited and second largest national park in Sri Lanka, known for its wildlife and variety of ecosystems."
        },
        {
            "image": "./assets/images/udawalawa.jpg",  // Placeholder image path
            "city": "Udawalawa",
            "title": "Udawalawe National Park",
            "description": " Udawalawe National Park, is one of the best places in the world to see wild elephants."
        },
        {
            "image": "./assets/images/wilpaththu.jpg",  // Placeholder image path
            "city": "Wilpaththu",
            "title": "Wilpattu National Park",
            "description": "Wilpattu is world-renowned for its leopard (Panthera pardus kotiya) population"
        },
        {
            "image": "./assets/images/trinco.jpg",  // Placeholder image path
            "city": "Trincomalee",
            "title": "Trincomalee",
            "description": "Trincomalee is a port city on the northeast coast of Sri Lanka, famous for its beautiful beaches and historical significance."
        },
        {
            "image": "./assets/images/minneriya.jpg",  // Placeholder image path
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
