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


let User = new Player(500, 500, 10, 45, 'green');



window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    player_y = canvas.height - 100;
    player_x = canvas.width / 2;

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
    // there is a key pressed!
    if (event.keyCode == 37) {
        left_arrow_key_is_pressed = true;
        // console.log("addEventListener: left key is pressed");
    }
    else if (event.keyCode == 39) {
        // player_x += player_move_distance  //moves player to the right
        right_arrow_key_is_pressed = true;
        // console.log("addEventListener: right key is pressed");

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


function handleUserMovements() {

}

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
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    // draw player
    colorCircle(User.x, User.y, User.circle_size, User.color);


    function colorCircle(centerX, centerY, radius, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        canvasContext.fill();
    }

    function colorRect(leftX, topY, width, height, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height);
    }
}
