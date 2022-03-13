let top3 = [];

function add(clicked_id) {
    let option = clicked_id;
    if (top3.length < 3) {
        top3.push(option)
    } else {
        alert("Please only pick 3");
    }
    console.log(top3);
}