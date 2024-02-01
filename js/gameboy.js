var character = document.querySelector(".character");
var map = document.querySelector(".map");

//start in the middle of the map
var x = 0;
var y = 0;
var speed = 0.3; //How fast the character moves in pixels per frame

const placeCharacter = () => {

    var pixelSize = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );

    const directions = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
    }
    const held_direction = directions.down;
    if (held_direction) {
        if (held_direction === directions.right) { x += speed; }
        if (held_direction === directions.left) { x -= speed; }
        if (held_direction === directions.down) { y += speed; }
        if (held_direction === directions.up) { y -= speed; }
        character.setAttribute("facing", held_direction);
    }
    character.setAttribute("walking", held_direction ? "true" : "false");

    //Limits (gives the illusion of walls)
    var leftLimit = -4;
    var rightLimit = 4;
    var topLimit = -8;
    var bottomLimit = (18*15);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit;
    character.removeAttribute("walking");}


    var camera_left = 0;
    var camera_top = pixelSize * 10;

    map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${-y * pixelSize + camera_top}px, 0 )`;
    // character.style.transform = `translate3d( ${x * pixelSize}px, ${y * pixelSize}px, 0 )`;
}


//Set up the game loop
const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
        step();
    })
}
// step();


window.onload = function () {
    
    character.setAttribute('style', 'animation: characterEntry 8s linear forwards;');
    // setTimeout(step, 6200);
    setTimeout(test, 8100);
}

function test() {
    character.removeAttribute("walking");
    // character.setAttribute("facing", "blinking");
    // setTimeout(testtwo, 2000);

    // setTimeout(step, 2000);
}

function testtwo() {
    // character.removeAttribute("blinking");
    character.setAttribute("walking", "true");
    setTimeout(step, 500);
}
