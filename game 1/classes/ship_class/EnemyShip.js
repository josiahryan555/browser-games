//has all information contained in ALL ships
// player and enemy


class EnemySpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        this.x = starting_x;
        this.y = starting_y;
        this.move_distance = move_distance;
        this.circle_radius = circle_radius;
        this.color = color;
        this.num_bullets = 30; //player can not have more than three bullets in play at one time
        this.bullet_array = [];
        this.width = 20;
        this.height = 30;
        this.alive = true;
    }

    moveLeft() {
        this.x -= this.move_distance;
    }
    moveRight() {
        this.x += this.move_distance;
    }

    //removes the oldest bullet if one of the bul
    removeBulletsCheck() {
        if (this.bullet_array[0].y < -30) {
            // shift() deletes the first element of an array
            // this is great because the oldest bullet will be the one that needs to be destroyed
            this.bullet_array.shift();
        };
    }

    // will render bullets
    renderBullets(canvas, canvasContext) {
        //move bullets
        this.bullet_array.forEach(function (bullet, iteration) {
            //draw bullets
            bullet.move();

            bullet.drawSelf(canvas, canvasContext);
            // colorRect(bullet.x, bullet.y, bullet.x + 5, bullet.y + 20, 'white', canvasContext);
        });
        // if there are any bullets in the bullet array, call the remove bullets check function
        if (this.bullet_array.length > 0) {
            this.removeBulletsCheck();
        }
    }

    renderSelf(canvas, canvasContext) {
        // colorRect(this.x, this.y, this.width, this.height, this.color, canvasContext);
        if (this.alive) {
            colorCircle(this.x, this.y, this.circle_radius, this.color, canvasContext);
        }
    }

    destroyed() {
        console.log("this spaceship is destroyed");
        this.alive = false;
    }

    get point_val() {
        return this.point_value;
    }

    // function to check if enemy has been hit, and if so, handles that
    collisionCheck(bullet_array) {
        let collision = false;  // collision with any bullets
        let bullet_collision = false;  //collision with a specific bullet in the loop

        let points_won = 0;

        let ship_left = this.x - (.5 * this.width);
        let ship_right = this.x + (.5 * this.width);
        let ship_top = this.y - (.5 * this.height);
        let ship_bottom = this.y + (.5 * this.height);

        bullet_array.forEach(function (bullet, index) {
            bullet_collision = bullet.collisionCheck(ship_left, ship_right, ship_top, ship_bottom);
            if (bullet_collision) {
                collision = true;
                // points_won = this.point_value;
                points_won = 10;
            }
        });
        // return collision;
        return points_won;
    }

    shoot() {
        if (this.bullet_array.length < this.num_bullets) {
            // shoot
            let bullet = new Bullet(this.x, this.y, 20, 'white');
            this.bullet_array.push(bullet);
        }
    }

}