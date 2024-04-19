// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let close = document.getElementsByClassName("close")[0];

let right = document.getElementById("button-right");
let left = document.getElementById("button-left");

let digitalImages = [];
let index = 0;

// looping though the children of the grid container to get all divs
function setUp(){
    let imageContainer = document.getElementById("digital-grid");
    let children = Array.from(imageContainer.children);
    let that = this;
    for(let i=0; i < children.length; i++){
        const CHILD = children[i];
        const SRC = CHILD.children[0].src;
        digitalImages.push(SRC);
        CHILD.addEventListener("click", ()=>{
            that.viewGallery(SRC, i);
        });
    }
}

function viewGallery(src, order){
    index = order;
    modal.style.display = "block";
    modal.querySelector("#gallery-portrait").src = src;
    console.log(src)
    console.log(index)
    if(index == 0){
        left.style.display = "none";
    }
    else if(index > 0){
        left.style.display = "block";
    }
    if(index == 9){
        right.style.display = "none";
    }
    else if(index < 9){
        right.style.display = "block";
    }
}

//switching through gallery
right.onclick = function(){
    index++;
    console.log(index)
    modal.querySelector("#gallery-portrait").src = digitalImages[index];
    if(index > 0){
        left.style.display = "block"
    }
    if(index == 9){
        right.style.display ="none";
    }
}

left.onclick = function(){
    index--;
    console.log(index)
    modal.querySelector("#gallery-portrait").src = digitalImages[index];
    if(index < 9){
        right.style.display = "block"
    }
    if(index == 0){
        left.style.display ="none";
    }
}   

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

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

//setting off the setUp function once the window loads
window.onload = setUp;

