function updateSlider(slideAmount) {
    let sliderDiv = document.getElementById("radius_numbers");
    radiusAmount = slideAmount/5;
    sliderDiv.innerHTML = radiusAmount + " km";
    console.log(radiusAmount)
    sessionStorage.setItem("radius", radiusAmount);
}