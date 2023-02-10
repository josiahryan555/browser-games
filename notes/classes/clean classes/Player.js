// Player class by itself.
// To be used with js.js file.  Add:
{/* <script src="js.js"></script> */ }
// to the header in classes.html

// export
class Player {
    constructor(starting_x, starting_y, move_distance, circle_size, color) {
        this.x = starting_x;
        this.y = starting_y;
        this.move_distance = move_distance;
        this.circle_size = circle_size;
        this.color = color;
    }

    moveLeft() {
        this.x -= this.move_distance;
    }
    moveRight() {
        this.x += this.move_distance;
    }
}