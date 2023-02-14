class BalloonLine {
    constructor(army_size, starting_x, starting_y, circle_radius, troop_spacing, balloon_health) {
        this.army_size = army_size;
        this.army_array = [];
        this.balloon_health = balloon_health;

        // this.populateArmy(starting_x, starting_y, troop_spacing);
        this.populateArmy(starting_x, starting_y, 70);

    }


    populateArmy(balloon_x, balloon_y, balloon_spacing) {
        for (let i = 0; i < this.army_size; i++) {
            let balloon = new Ballon(balloon_x, balloon_y, this.balloon_health);
            this.army_array.push(balloon);
            balloon_x += balloon_spacing;
            // console.log("balloon " + i);
        }
    }

    render(canvas, canvasContext) {
        // console.log("balloonLine.render");
        this.army_array.forEach(function (balloon, index) {
            balloon.renderSelf(canvas, canvasContext);
            // console.log("rendering balloon " + index);

        });
    }

    //recieves a XMovingPlayerShip object
    collisionCheck(User) {
        let collision = false;
        this.army_array.forEach(function (balloon, index) {
            let hit = balloon.collisionCheck(User);  //bool
            if (hit) {
                // console.log("printing BalloonLine.collisionCheck, balloon.hit() = " + val);
                collision = true;
            }
        })
        this.removeDeadEnemies();
        return collision;
    }


    removeDeadEnemies() {
        //creates copy of the army, and filters out any who are dead
        const copy_army = this.army_array.filter(item => item.health > 0);
        this.army_array = copy_army;
    }

    //calls each balloon's move function
    move() {
        this.army_array.forEach(function (balloon, index) {
            balloon.move();
        })
    }
}