
import { navbar } from "./components/navbar.js"
import { footer } from "./components/footer.js"

let nav = document.querySelector("#navigation")
nav.innerHTML = navbar()
let foot = document.querySelector("footer")
foot.innerHTML = footer()

document.querySelector("#cart").addEventListener("mouseover", () => {
    document.querySelector(".cart-pannel").style.display = "block"
    document.querySelector(".cart-pannel").style.top = "16%"
})
document.querySelector("#cart").addEventListener("mouseout", () => {
    document.querySelector(".cart-pannel").style.display = "none"
    document.querySelector(".cart-pannel").style.top = "20%"
})

document.querySelector("#shop-now").addEventListener("click", () => {
    location.href = "./products.html"
})