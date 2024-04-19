function openMenu() {
    let menu = document.getElementById("mylinks");
    let icons = document.getElementById("sm-icons");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    if (icons.style.display === "block") {
        icons.style.display = "none";
    } else {
        icons.style.display = "block";
    }
}