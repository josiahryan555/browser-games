let canvas;
let canvasContext;

let left_arrow_key_is_pressed = false;
let right_arrow_key_is_pressed = false;

let User = new PlayerShip(500, 500, 10, 45, 'green');
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


// ############################################################################################################
// Method2:
// use Bool variable that is switched on and off as user presses button, and speed is added in moveEverything()
//Pro: Smoother than method 1
document.addEventListener('keydown', function (event) {
    //Left Arrow Key = move left
    if (event.keyCode == 37) {
        left_arrow_key_is_pressed = true;
    }
    //Right Arrow Key = move right
    else if (event.keyCode == 39) {
        right_arrow_key_is_pressed = true;

    }
    //Spacebar = shoot bullet
    else if (event.keyCode == 32) {
        User.shoot();
        console.log("bullet shot in game_functionality.js");
    }
});
// ######################################################################################################################


// addes event listener to keyup
document.addEventListener('keyup', function (event) {
    // there is a key released!
    if (event.keyCode == 37) {
        left_arrow_key_is_pressed = false;
    }
    else if (event.keyCode == 39) {
        right_arrow_key_is_pressed = false;

    }
});


function moveEverything() {
    let points_earned = 0;
    points_earned = EnemySwarm.collisionCheck(User.bullet_array);
    User.collisionCheck(EnemySwarm.army_array);

    if (points_earned > 0) {
        updateScore(points_earned);
    }

    if (left_arrow_key_is_pressed) {
        User.moveLeft();
    }
    if (right_arrow_key_is_pressed) {
        User.moveRight();
    }
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