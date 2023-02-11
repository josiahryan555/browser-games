class EnemyShip extends SpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        super(starting_x, starting_y, move_distance, circle_radius, color);
    }

    // function to check if enemy has been hit, and if so, handles that
    collisionCheck(bullet_array) {
        let collision = false;  // collision with any bullets
        let bullet_collision = false;  //collision with a specific bullet in the loop

        let ship_left = this.x - (.5 * this.width);
        let ship_right = this.x + (.5 * this.width);
        let ship_top = this.y - (.5 * this.height);
        let ship_bottom = this.y + (.5 * this.height);

        bullet_array.forEach(function (bullet, index) {
            bullet_collision = bullet.collisionCheck(ship_left, ship_right, ship_top, ship_bottom);
            if (bullet_collision) {
                collision = true;
            }
        });
        return collision;
    }

    shoot() {
        if (this.bullet_array.length < this.num_bullets) {
            // shoot
            let bullet = new Bullet(this.x, this.y, 20, 'white');
            this.bullet_array.push(bullet);
        }
    }
}



