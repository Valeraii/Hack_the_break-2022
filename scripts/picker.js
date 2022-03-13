let top3 = [];

function add(clicked_id) {
    let option = clicked_id;
    if (top3.length < 3) {
        top3.push(option)
    } else {
        alert("Please only pick 3");
    }
    console.log(top3);
    sessionStorage.setItem("top3", top3);
}

let btn1 = document.getElementById("Okoman Restaurant");
btn1.addEventListener('click', () => btn1.style.backgroundColor = '#337ab7');
let btn2 = document.getElementById("Sushi California");
btn2.addEventListener('click', () => btn2.style.backgroundColor = '#337ab7');
let btn3 = document.getElementById("Bento Sushi");
btn3.addEventListener('click', () => btn3.style.backgroundColor = '#337ab7');
let btn4 = document.getElementById("North Road Sushi & Kitchen");
btn4.addEventListener('click', () => btn4.style.backgroundColor = '#337ab7');
let btn5 = document.getElementById("Katsuya Coquitlam");
btn5.addEventListener('click', () => btn5.style.backgroundColor = '#337ab7');
