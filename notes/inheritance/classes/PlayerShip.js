class PlayerShip extends SpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        super(starting_x, starting_y, move_distance, circle_radius, color)
    }

    // function to check if user has been hit, and if so, handles that
    collisionCheck(list_of_enemies) {
        let collision = false;

        let ship_left = this.x - (.5 * this.width);
        let ship_right = this.x + (.5 * this.width);
        let ship_top = this.y - (.5 * this.height);
        let ship_bottom = this.y + (.5 * this.height);

        list_of_enemies.forEach(function (enemy, index) {
            enemy.bullet_array.forEach(function (bullet, index) {
                collision = bullet.collisionCheck(ship_left, ship_right, ship_top, ship_bottom);
                if (collision) {
                    this.destroyed();
                }
            });
        });
    }

    shoot() {
        if (this.bullet_array.length < this.num_bullets) {
            // shoot
            let bullet = new Bullet(this.x, this.y, -20, 'white');
            this.bullet_array.push(bullet);
        }
    }
}



