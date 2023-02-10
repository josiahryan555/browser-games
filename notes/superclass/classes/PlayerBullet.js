class PlayerBullet {
    constructor(starting_x, starting_y, speed, color) {
        this.x = starting_x;
        this.y = starting_y;
        this.speed = speed;
        this.color = color;
        this.width = 5;
        this.height = 20;
        this.top_left_x = this.x - (.5 * this.width);
        this.top_left_y = this.y - (.5 * this.height);
    }

    move() {
        this.y -= this.speed;
        // update these variables
        this.top_left_x = this.x - (.5 * this.width);
        this.top_left_y = this.y - (.5 * this.height);
    }

    drawSelf(canvas, canvasContext) {
        colorRect(this.top_left_x, this.top_left_y, this.width, this.height, this.color, canvasContext);
    }
}