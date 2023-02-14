let canvas;
let canvasContext;

let Game1 = new BalloonGame();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);
}

document.addEventListener('keydown', function (event) {
    const code = event.key;
    Game1.User.handle_keydown(code);
});

document.addEventListener('keyup', function (event) {
    const code = event.key;  //this gets the name (like "ArrowLeft") of the event
    Game1.User.handle_keyup(code);
});

function moveEverything() {
    // Game.Level.collisionCheck(Game.User);
    Game1.game();//TODO should be updated to do all game1. moves
    Game1.moveEverything();
}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black', canvasContext);

    Game1.render(canvas, canvasContext);
}