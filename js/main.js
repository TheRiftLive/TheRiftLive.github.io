var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = "500px";
})

function openProject() {
    window.open("https://www.twitter.com/theriftlive");
}