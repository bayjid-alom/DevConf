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