// function createAPILink(latitude, longitude, radius, type) {
//     return `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}+Restaurant&sensor=true&location=${latitude},${longitude}&radius=${radius}&key=AIzaSyD0J4n1ZJV_NNcZVXdHGBkAWr0s1BRIPDs`;
// }

// let link = createAPILink(10, 10, 25, "sushi");

// // const axios = require('axios')

// // axios
// //     .get(link)
// //     .then(res => {
// //         console.log(res)
// //     })

// let restaurants = [];

// $.getJSON(link, function(data) {
//     data.forEach(element => {
//         restaurants.push(data.name);
//     });
// });

// console.log(link);
// console.log(restaurants);

function get_data(data){
    console.log(data);
}

function get_api(){
    api_key = "";
    type = "sushi"
    latitude = "10"
    longitude = "10"
    radius = "15"

    // ajax
    $.ajax({
        "url": `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}+Restaurant&sensor=true&location=${latitude},${longitude}&radius=${radius}&key=${api_key}`,
        "type": "get",
        "success": get_data
    })
}

function setup(){
    $("#search").click(get_api);
}

$(document).ready(setup);
