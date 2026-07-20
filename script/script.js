const speakerBtn = document.getElementById("speaker-li-btn");
speakerBtn.addEventListener("click", function () {
    const speakerSection = document.getElementById("speakers");

    speakerSection.scrollIntoView({
        behavior: "smooth"
    })
})

const homeBtn = document.getElementById("home-li-btn");
homeBtn.addEventListener("click", function () {
    const homeSection = document.getElementById("banner-section");

    homeSection.scrollIntoView({
        behavior: "smooth"
    })
})

const ticketBtn = document.getElementById("tickets");
ticketBtn.addEventListener("click", function () {
    document.getElementById("pricing-section").scrollIntoView({
        behavior: "smooth"
    })
})


const regBtn = document.querySelector("header nav .btn");
regBtn.style.transition = "background-color 0.3s ease, transform 0.3s ease";

regBtn.addEventListener("mouseenter", function () {
    regBtn.style.backgroundColor = "#1d4fd8e7"
    regBtn.style.transform = "scale(1.03)";
})

regBtn.addEventListener("mouseleave", function () {
    regBtn.style.backgroundColor = "#1D4ED8"
    regBtn.style.transform = "scale(1)";
})




const regLarge = document.querySelector("#banner-section button");
// regLarge.style.transition = "backgroun-color 0.3s ease, transform 0.3s ease"
regLarge.style.transition = "background-color 0.3s ease, transform 0.3s ease, color 0.3s ease, border 0.3s ease";

regLarge.addEventListener("mouseenter", function () {
    regLarge.style.backgroundColor = "#000822a4"
    regLarge.style.transform = "scale(1.03)"
    regLarge.style.color = "white"
    regLarge.style.border = "1px solid white"
})

regLarge.addEventListener("mouseleave", function () {
    regLarge.style.backgroundColor = "#1D4ED8"
    regLarge.style.transform = "scale(1)"
    regLarge.style.color = "white"
    regLarge.style.border = "none"
})