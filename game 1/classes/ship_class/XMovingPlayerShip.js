//has all information contained in ALL ships
// player and enemy

class XMovingPlayerShip extends PlayerSpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        super(starting_x, starting_y, move_distance, circle_radius, color);
        this.move_distance = move_distance;
        this.moving_left = false; //when left arrow key is pressed
        this.moving_right = false; //when right arrow key is pressed
    }

    handle_keyup(name) {
        // there is a key released!
        if (name == "ArrowLeft") {
            this.moving_left = false;
        } else if (name == "ArrowRight") {
            this.moving_right = false;
        }
    }

    // when passed a key
    // Use: document.addEventListener('keydown', function (event) { User.handle_keydown(event.code); });
    // This functions handles all keydown events
    handle_keydown(code) {
        // console.log("handle_keydown(code) is:" + code)
        if (code == "ArrowLeft") {
            this.moving_left = true;
        } else if (code == "ArrowRight") {
            this.moving_right = true;
        } else if (code == " ") {
            this.shoot();
        }
    }

    //moves user 1 move_distance per frame
    move() {
        if (this.moving_left) {

            this.x -= this.move_distance;
        } else if (this.moving_right) {

            this.x += this.move_distance;
        }
        // if both right and left arrow keys are pressed down, the speed will even out to neutral
    }
}