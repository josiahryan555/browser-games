//this is meant to be the level of a game, like on round/level of galaga or pacman

class Level {
    constructor(level_number, num_lines, num_balloons_per_line) {
        this.level_number = level_number;
        this.num_lines = num_lines;
        this.num_balloons_per_line = num_balloons_per_line;
        this.balloon_lines = [];
        this.balloon_size = 35;
        this.generateLevel();
        console.log(this.balloon_lines);
        console.log(this.balloon_lines[0]);
        console.log(this.balloon_lines[0].army_array);


    }

    generateLevel() {
        let balloon_line;
        let x = 60;
        let y = 60;
        //balloon_dist = function calculate distance between balloons
        let balloon_dist = this.balloon_size * 2;

        for (let i = 0; i < this.num_lines; i++) {
            balloon_line = new BalloonLine(this.num_balloons_per_line, x, y, this.balloon_size, this.balloon_dist);
            this.balloon_lines.push(balloon_line);
            console.log("created balloon line " + i);
            // x += balloon_dist;
            y += 70;

        }
    }

    //balloon_dist = function calculate distance between balloons

    //recieves an array of bullets and if any collisions, destroys the bullets, and does damage to baloon.
    collisionCheck(bullet_array) {
        let collision = false;
        this.balloon_lines.forEach(function (balloon_line, index) {
            let hit = balloon_line.collisionCheck(bullet_array);  //bool
            // if (hit) {
            //     balloon.hit();
            //     collision = true;
            // }
        })
        return collision;
    }

    render(canvas, canvasContext) {
        this.balloon_lines.forEach(function (balloon_line, index) {
            // console.log("rendering balloon line " + index);
            balloon_line.render(canvas, canvasContext);
        })
    }

}