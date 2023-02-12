let canvas;
let canvasContext;

let left_arrow_key_is_pressed = false;
let right_arrow_key_is_pressed = false;

let User = new XMovingPlayerShip(500, 500, 10, 45, 'green');
let EnemySwarm = new EnemyArmy(10, 50, 50, 10, 'red', 70);

let player_score = 0;

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
    User.handle_keydown(code);
});

document.addEventListener('keyup', function (event) {
    const code = event.key;  //this gets the name (like "ArrowLeft") of the event
    User.handle_keyup(code);
});

function moveEverything() {
    let points_earned = 0;
    points_earned = EnemySwarm.collisionCheck(User.bullet_array);

    User.move();
    User.collisionCheck(EnemySwarm.army_array);

}

function drawEverything() {
    // next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black', canvasContext);

    // draw player
    colorCircle(User.x, User.y, User.circle_size, User.color, canvasContext);

    User.renderSelf(canvas, canvasContext);
    User.renderBullets(canvas, canvasContext);
    EnemySwarm.renderArmy(canvas, canvasContext);
}

function updateScore(new_points) {
    player_score += new_points;
    console.log("Player Score: " + player_score);
}