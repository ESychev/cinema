const schemeSvg = document.querySelector(".scheme-svg");
const totallPriceTag = document.querySelector(".price-total");
let cost = 800;
let totallPrice = 0;
schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        totallPrice = schemeSvg.querySelectorAll(".active").length * cost;
        totallPriceTag.textContent = totallPrice;

    }
});