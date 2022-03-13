function getLocation() {
    navigator.geolocation.getCurrentPosition(storePosition);
}

function storePosition(position){
    let latitue = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitue)
    console.log(longitude)
}