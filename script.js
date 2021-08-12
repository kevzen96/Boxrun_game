var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>-30 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over.");
        block.style.animation = "block 1s infinite linear";
    }
}, 10);