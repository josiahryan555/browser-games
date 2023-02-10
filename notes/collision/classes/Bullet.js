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


    // TODO ERROR: This will work well for shooting bullets at the enemy, but wont help the enemy shoot back
    collisionCheck(ship_left, ship_right, ship_top, ship_bottom) {
        if (this.speed > 0) {
            // bullet is coming toward player
            //first calculate the y value nearest the target (player)
            let bullet_bottom = this.y + (.5 * this.height);

            //check if bullet bottom is even close enough to player to hit
            if (bullet_bottom > ship_top) {
                //calc bullet edges
                let bullet_left = this.x - (.5 * this.width);
                let bullet_right = this.x + (.5 * this.width);
                let bullet_top = this.y - (.5 * this.height);
                //check for collision
                if (bullet_top < ship_bottom && bullet_left < ship_right && bullet_right > ship_left) {
                    //collision!
                    return true;
                    console.log("collision!");

                }
            }

        } else if (this.speed < 0) {
            // bullet is going toward enemy
            //first calculate the y value nearest the target (enemy)
            let bullet_top = this.y - (.5 * this.height);

            //check if bullet bottom is even close enough to player to hit
            if (bullet_top < ship_bottom) {
                //calc bullet edges
                let bullet_left = this.x - (.5 * this.width);
                let bullet_right = this.x + (.5 * this.width);
                let bullet_bottom = this.y + (.5 * this.height);
                //check for collision
                if (bullet_bottom > ship_top && bullet_left < ship_right && bullet_right > ship_left) {
                    //collision!
                    return true;
                    console.log("collision!");
                }
            }
        }
        else {
            return false;
        }
    }
}