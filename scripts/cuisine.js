function add(clicked_id) {
    let cuisinePreference = clicked_id;
    console.log(cuisinePreference);
    sessionStorage.setItem("cuisine", cuisinePreference);
}