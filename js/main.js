document.querySelector(".generator").style.display = "block";
document.querySelector(".nav-gene").addEventListener("click", () => {
    document.querySelector(".generator").style.display = "block";
    document.querySelector(".scanner").style.display = "none";
    document.querySelector(".nav-gene").classList.add("active");
    document.querySelector(".nav-scan").classList.remove("active");
});

document.querySelector(".nav-scan").addEventListener("click", () => {
    document.querySelector(".generator").style.display = "none";
    document.querySelector(".scanner").style.display = "block";
    document.querySelector(".nav-gene").classList.remove("active");
    document.querySelector(".nav-scan").classList.add("active");
});