let canvas;
let canvasContext;

let left_arrow_key_is_pressed = false;
let right_arrow_key_is_pressed = false;

// let Game.User = new XMovingPlayerShip(500, 500, 10, 45, 'green');
// let Game.Level = new Level(1, 3, 10, 4);


let player_score = 0;

let Game1 = new Game();

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

    Game1.User.move();
    Game1.Level.move();

    Game1.User.collisionCheckLevel(Game1.Level.balloon_lines);
}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black', canvasContext);

    // draw player
    colorCircle(Game1.User.x, Game1.User.y, Game1.User.circle_size, Game1.User.color, canvasContext);

    Game1.User.renderSelf(canvas, canvasContext);
    Game1.User.renderBullets(canvas, canvasContext);
    Game1.Level.render(canvas, canvasContext);
}

function updateScore(new_points) {
    player_score += new_points;
    // console.log("Player Score: " + player_score);
}