class Bullet {
    constructor(starting_x, starting_y, speed, color) {
        this.x = starting_x;
        this.y = starting_y;
        this.speed = speed;
        this.color = color;
        this.width = 5;
        this.height = 20;
        this.top_left_x = this.x - (.5 * this.width);
        this.top_left_y = this.y - (.5 * this.height);
        this.hit_box = {
            top: this.y - this.height,
            bottom: this.y + this.height,
            left: this.x - this.width,
            right: this.x + this.width
        };
    }

    updateHitBox() {
        let updated_hit_box = {
            top: this.y - this.height,
            bottom: this.y + this.height,
            left: this.x - this.width,
            right: this.x + this.width
        }
        this.hit_box = updated_hit_box;
    }

    getHitBox() {
        return this.hit_box;
    }

    move() {
        this.y += this.speed;
        // update these variables
        this.top_left_x = this.x - (.5 * this.width);
        this.top_left_y = this.y - (.5 * this.height);
        this.updateHitBox();
    }

    drawSelf(canvas, canvasContext) {
        colorRect(this.top_left_x, this.top_left_y, this.width, this.height, this.color, canvasContext);
    }


    collisionCheck(hit_box) {
        let target_top = hit_box.top;
        let target_bottom = hit_box.bottom;
        let target_left = hit_box.left;
        let target_right = hit_box.right;

        if (this.speed > 0) {
            // bullet is coming toward player

            //check if bullet bottom is even close enough to player to hit
            if (this.hit_box.bottom > target_top) {
                //check for collision
                if (this.hit_box.top < target_bottom && this.hit_box.left < target_right && this.hit_box.right > target_left) {
                    //collision!
                    console.log("collision!");
                    return true;
                }
            }

        } else if (this.speed < 0) {
            // bullet is going toward enemy

            //check if bullet bottom is even close enough to player to hit
            if (this.hit_box.top < target_bottom) {
                //check for collision
                if (this.hit_box.bottom > target_top && this.hit_box.left < target_right && this.hit_box.right > target_left) {
                    //collision!
                    console.log("collision!");
                    return true;
                }
            }
        }
        else {
            //no collsions, something has to be returned
            return false;
        }
    }
}