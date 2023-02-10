class EnemyShip extends SpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        super(starting_x, starting_y, move_distance, circle_radius, color);
    }

    // function to check if enemy has been hit, and if so, handles that
    collisionCheck(bullet_array) {
        let collision = false;

        let ship_left = this.x - (.5 * this.width);
        let ship_right = this.x + (.5 * this.width);
        let ship_top = this.y - (.5 * this.height);
        let ship_bottom = this.y + (.5 * this.height);

        bullet_array.forEach(function (bullet, index) {
            collision = bullet.collisionCheck(ship_left, ship_right, ship_top, ship_bottom);
            if (collision) {
                return true;
            }
        });

    }
}



