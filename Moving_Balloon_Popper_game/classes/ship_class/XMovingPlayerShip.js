//has all information contained in ALL ships
// player and enemy

class XMovingPlayerShip extends PlayerSpaceShip {
    constructor(starting_x, starting_y, move_distance, circle_radius, color) {
        super(starting_x, starting_y, move_distance, circle_radius, color);
        this.move_distance = move_distance;
        this.moving_left = false; //when left arrow key is pressed
        this.moving_right = false; //when right arrow key is pressed
        this.player_points = 0;
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
            if (this.alive) {
                this.shoot();
            }
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
        this.updateHitBox();
    }


    //ship collision check
    selfCollisionCheck(hit_box) {
        //check if bullet bottom is even close enough to player to hit
        if (this.hit_box.bottom > hit_box.top) {
            //check for collision
            if (this.hit_box.top < hit_box.bottom && this.hit_box.left < hit_box.right && this.hit_box.right > hit_box.left) {
                //collision!
                // console.log("collision!");
                // self.hit();
                this.alive = false;
                return true;
            }
        }
        return false;
    }



    // function to check if user has been hit, and if so, handles that
    collisionCheckRow(BalloonLine) {
        // BalloonLine.army_array.filter(balloon => this.collisionCheckRow(balloon));

        // console.log("in collisionCheckRow, list_of_enemies: " + list_of_enemies);
        // console.log(BalloonLine.army_array.length);
        // console.log(list_of_enemies.length);
        let balloon_line = BalloonLine.army_array;


        //loops through each balloon in array
        for (let i = 0; i < balloon_line.length; i++) {
            let balloon = balloon_line[i];
            if (balloon.alive()) {

                //will loop through array of bullets and check collisions
                for (let j = 0; j < this.bullet_array.length; j++) {
                    let bullet = this.bullet_array[j];
                    if (!bullet.destroyed) {
                        //bullet is not destroyed
                        let collision = bullet.collisionCheck(balloon.hit_box);
                        if (collision) {
                            //remove bullet
                            // this.bullet_array.splice(j, 1);
                            bullet.destroy();

                            //hit balloon
                            let points = balloon.hit()
                            this.increasePoints(points);

                        }
                    }
                }

                //check for ship collision
                let ship_collision = false;
                ship_collision = this.selfCollisionCheck(balloon.hit_box);
            }
        }
    }

    //calls a collision check on every row (or a whole level at the time I'm conceptualizing)
    collisionCheckLevel(matrix_of_balloons) {
        // matrix_of_balloons.forEach(function (row_of_balloons, index) {
        //     collisionCheckRow(row_of_balloons);
        // })
        matrix_of_balloons.map(balloon_line => this.collisionCheckRow(balloon_line));
    }

    increasePoints(points) {
        this.player_points += points;
        return this.player_points;
    }
}