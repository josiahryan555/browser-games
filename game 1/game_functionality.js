let canvas;
let canvasContext;

let left_arrow_key_is_pressed = false;
let right_arrow_key_is_pressed = false;

// Class Declaration
// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(10, 10);


let User = new SpaceShip(500, 500, 10, 45, 'green');
let EnemySwarm = new EnemyArmy(10, 50, 50, 10, 'red', 70);
// starting_x, starting_y, circle_radius, color, troop_spacing

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
        // console.log("addEventListener: left key is pressed");
    }
    //Right Arrow Key = move right
    else if (event.keyCode == 39) {
        // player_x += player_move_distance  //moves player to the right
        right_arrow_key_is_pressed = true;
        // console.log("addEventListener: right key is pressed");

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
        // console.log("addEventListener: left key is released");
    }
    else if (event.keyCode == 39) {
        // player_x += player_move_distance  //moves player to the right
        right_arrow_key_is_pressed = false;
        // console.log("addEventListener: right key is released");

    }
});


function moveEverything() {
    if (left_arrow_key_is_pressed) {
        // player_x -= player_move_distance;
        User.moveLeft();
    }
    if (right_arrow_key_is_pressed) {
        // player_x += player_move_distance;
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
