document.querySelector("#cart").addEventListener("mouseover", () => {
    document.querySelector(".cart-pannel").style.display = "block"
    document.querySelector(".cart-pannel").style.top = "16%"
})
document.querySelector("#cart").addEventListener("mouseout", () => {
    document.querySelector(".cart-pannel").style.display = "none"
    document.querySelector(".cart-pannel").style.top = "20%"
})