function add(clicked_id) {
    let dietaryPreference = clicked_id;
    console.log(dietaryPreference);
    sessionStorage.setItem("diet", dietaryPreference);
}