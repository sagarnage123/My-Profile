window.onload = () => {
    document.querySelector(".container").style.opacity = "1";
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.transition = "opacity 0.8s ease-in-out";
    container.style.opacity = "0";

    setTimeout(() => {
        container.style.opacity = "1";
    }, 100);
});
