console.log("CreatorBoost AI Loaded Successfully!");

const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("tools").scrollIntoView({
            behavior: "smooth"
        });
    });
}
