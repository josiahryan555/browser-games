//this is meant to be the level of a game, like on round/level of galaga or pacman
//this level is the (y-axis) arrangments of lines (x-axis), specifically BalloonLines

class Level {
    constructor(level_number, num_lines, num_balloons_per_line, balloon_health) {
        this.level_number = level_number;
        this.num_lines = num_lines;
        this.num_balloons_per_line = num_balloons_per_line;
        this.balloon_lines = [];
        this.balloon_size = 35;
        this.balloon_health = balloon_health;
        this.generateLevel();
        // console.log(this.balloon_lines);
        // console.log(this.balloon_lines[0]);
        // console.log(this.balloon_lines[0].army_array);
    }

    generateLevel() {
        let balloon_line;
        let x = 60;
        let y = 60;
        // let y = 400; //start in middle of screen

        //balloon_dist = function calculate distance between balloons
        let balloon_dist = this.balloon_size * 2;

        for (let i = 0; i < this.num_lines; i++) {
            balloon_line = new BalloonLine(this.num_balloons_per_line, x, y, this.balloon_size, this.balloon_dist, this.balloon_health);
            this.balloon_lines.push(balloon_line);
            // console.log("created balloon line " + i);
            // x += balloon_dist;
            y += 70;

        }
    }

    //balloon_dist = function calculate distance between balloons

    //recieves a XMovingPlayerShip object
    collisionCheck(User) {
        let collision = false;
        this.balloon_lines.forEach(function (balloon_line, index) {
            let hit = balloon_line.collisionCheck(User);  //bool
        })
        return collision;
    }

    render(canvas, canvasContext) {
        console.log("Level.render()");
        this.balloon_lines.forEach(function (balloon_line, index) {
            // console.log("rendering balloon line " + index);
            balloon_line.render(canvas, canvasContext);
        })
    }

    //calls the BalloonLine's move() function
    move() {
        this.balloon_lines.forEach(function (balloon_line, index) {
            balloon_line.move();
        })
    }

    //returns true if level is passed
    finished(height) {
        if (this.balloon_lines[0].army_array[0].y >= height) {
            //checks this one balloon's y
            return true;
        }
        else {
            return false;
        }
    }

}