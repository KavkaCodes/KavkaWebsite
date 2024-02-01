window.onload = function () {
    var gameboy = document.getElementById('gameboy');
    // var loading = document.getElementById('loadScreen');
    gameboy.classList.add('characterLoad');
    const myTimeout = setTimeout(myScreenLoad, 11000);
    console.log('hellp');
};

function myScreenLoad() {
    var gameboy = document.getElementById('gameboy');
    var gameboySprite = document.getElementById('gameboy_sprite');
    var loading = document.getElementById('loadScreen');

    // gameboy.setAttribute('style', 'right: 18px; bottom: 18px; ');
    gameboySprite.classList.remove('character_anim');
    // loading.classList.add('loadingShrink');
    // const myTimeout = setTimeout(myScreenShrink, 3000);
}

function myScreenShrink() {
    var loading = document.getElementById('loadScreen');
    // loading.setAttribute('style', 'background-color: transparent;z-index: -100;');
}

