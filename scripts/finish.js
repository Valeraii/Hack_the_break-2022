function reroll() {
    var rerollarr = JSON.parse(sessionStorage.getItem("top3"));
    console.log(rerollarr);
    reduce(rerollarr, 1);
    let x = sessionStorage.getItem("final");
    document.getElementById("final").innerHTML = x;
}
