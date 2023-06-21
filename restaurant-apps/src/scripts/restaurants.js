const Restaurants = () => {
    import('../DATA.json').then(({
        default: jsonData,
    }) => {
        const restaurants = jsonData.restaurants;
        let restoList = '';
        restaurants.forEach((resto) => {
            restoList +=
                `
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <img src="${resto.pictureId}" alt="Gambar restaurant ${resto.name}">
                        </div>
                        <div class="card-detail">
                            <h3 class="card-title">
                                <a href="./restaurant/${resto.id}">${resto.name}</a>
                            </h3>
                            <div class="card-location-rating">     
                                <div class="card-city">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span class="card-city-text">${resto.city} </span>
                                </div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>  
                                    <span>${resto.rating}</span>
                                </div>
                            </div>
                            <p class="card-description">${resto.description}</p>
                        </div>
                    </div>
                </div>
                `;
        });
        document.querySelector('#resto-list').innerHTML = restoList;
    });
}

export default Restaurants;