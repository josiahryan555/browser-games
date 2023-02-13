//has all information contained in ALL ships
// player and enemy


class PlayerSpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        this.x = starting_x;
        this.y = starting_y;
        this.circle_radius = circle_radius;
        this.color = color;
        this.num_bullets = 30; //player can not have more than three bullets in play at one time
        this.bullet_array = [];
        this.width = 20;
        this.height = 30;
        this.alive = true;
        this.hit_box = {
            top: this.y - this.circle_radius,
            bottom: this.y + this.circle_radius,
            left: this.x - this.circle_radius,
            right: this.x + this.circle_radius
        };
    }

    //returns new hitbox
    updateHitBox() {
        let updated_hit_box = {
            top: this.y - this.circle_radius,
            bottom: this.y + this.circle_radius,
            left: this.x - this.circle_radius,
            right: this.x + this.circle_radius
        }
        this.hit_box = updated_hit_box;
    }

    getHitBox() {
        return this.hit_box;
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
        });
        // if there are any bullets in the bullet array, call the remove bullets check function
        if (this.bullet_array.length > 0) {
            this.removeBulletsCheck();
        }
    }

    renderSelf(canvas, canvasContext) {
        // colorRect(this.x, this.y, this.width, this.height, this.color, canvasContext);
        if (this.alive) {
            // console.log("rendering self becuase this.alive = " + this.alive);
            colorCircle(this.x, this.y, this.circle_radius, this.color, canvasContext);
        }
    }

    //called when playership is shot
    hit() {
        console.log("User SpaceShip is destroyed");
        this.alive = false;
    }

    shoot() {
        if (this.bullet_array.length < this.num_bullets) {
            // shoot
            let bullet = new Bullet(this.x, this.y, -20, 'white');
            this.bullet_array.push(bullet);
        }
    }

    handle_move_keydown(event) {
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
            this.shoot();
        }
        // console.log("bullet shot in game_functionality.js");
    }
}