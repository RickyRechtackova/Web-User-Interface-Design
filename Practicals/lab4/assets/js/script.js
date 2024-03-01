var indexbody = document.getElementById("index");
var popup = document.getElementById("easteregg_popup");
let button = document.getElementById("menu-header");
let clickSound = document.getElementById("clickSound")
	audios = document.querySelectorAll('audio');
console.log(audios);

function popUp(){
    popup.style.display = "block";
}

indexbody.onclick = function(event){
    if(event.target == popup)
    {
        popup.style.display = "none";
    }
}

//sound when clicking
button.addEventListener("click", function(){
    clickSound.play();
})