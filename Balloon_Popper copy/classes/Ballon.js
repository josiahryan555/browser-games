//I'm thinking like balloon tower defence ballons

class Ballon {
    constructor(starting_x, starting_y, health) {
        this.health = health;
        this.x = starting_x;
        this.y = starting_y;
        this.circle_radius = 30;
        this.hit_box = {
            top: this.y - this.circle_radius,
            bottom: this.y + this.circle_radius,
            left: this.x - this.circle_radius,
            right: this.x + this.circle_radius
        };
        this.updateHitBox();
    }

    updateHitBox() {
        const updated_hit_box = {
            top: this.y - this.circle_radius,
            bottom: this.y + this.circle_radius,
            left: this.x - this.circle_radius,
            right: this.x + this.circle_radius
        };
        this.hit_box = updated_hit_box;
    }

    getHitBox() {
        return this.hit_box;
    }

    //pops ballon, goes down in health
    hit() {
        this.health -= 1;
    }

    //render
    renderSelf(canvas, canvasContext) {
        if (this.health > 0) {
            let color = this.getColor();
            colorCircle(this.x, this.y, this.circle_radius, color, canvasContext);
        }
    }

    //collision
    // function to check if enemy has been hit, and if so, handles that
    //TODO make bullet dissapear after it hits, do one damage
    collisionCheck(bullet_array) {
        // console.log(this.hit_box);
        const baloon_hit_box = this.hit_box; //this line fixed problem when using this.hig_box in the bellow .for each funciton

        let collision = false;  // collision with any bullets
        let bullet_collision = false;  //collision with a specific bullet in the loop

        bullet_array.forEach(function (bullet, index, self) {
            bullet_collision = bullet.collisionCheck(baloon_hit_box);

            if (bullet_collision) {
                collision = true;
                bullet_array.splice(index, 1);
            }
        });
        // return collision;
        return collision;
    }

    //returns the baloon's color
    getColor() {
        //maybe use a switch?
        if (this.health == 1) {
            return "red";
        } else if (this.health == 2) {
            return "blue";
        } else if (this.health == 3) {
            return "green";
        } else if (this.health == 4) {
            return "pink";
        } else {
            return "none";
        }
    }
}