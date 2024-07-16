document.addEventListener('DOMContentLoaded', function() {
    const vehicleList = document.getElementById('vehicles-list');

    // Inline JSON data
    const data = [
        {
            "image": "./assets/images/hiace.png",
            "title": "Hiace",
        },
        {
            "image": "./assets/images/prius.png",
            "title": "Prius",
        },
        {
            "image": "./assets/images/coaster.png",
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
