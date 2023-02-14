//This game class will contain multiple level classes (which contain multiple balloon lines)

class BalloonGame {
    constructor(canvas) {
        this.User = new XMovingPlayerShip(500, 500, 10, 45, 'green');
        this.next_level_num = 1;
        this.Level = this.makeLevel(this.next_level_num);
        this.canvas = canvas;
        this.game_playing = true;
        this.player_score = 0;

        this.game();

    }

    //returns level object with level_num determining the difficulty
    makeLevel(level_num) {
        let level = new BalloonLevel(1, 3, 10, level_num);
        this.next_level_num += 1; //updates level_num
        return level;
    }

    //called every move()
    game() {
        if (this.game_playing) {
            this.handleLevelChange();
        }
    }

    //checks if there needs to be a level change
    handleLevelChange() {
        if (this.Level.finished(600)) {
            console.log("making next level!");
            this.Level = this.makeLevel(this.next_level_num);
        }
    }

    //renders all game objects
    render(canvas, canvasContext) {
        this.User.renderSelf(canvas, canvasContext);
        this.Level.render(canvas, canvasContext);
        this.User.renderBullets(canvas, canvasContext);
        this.renderScore(canvasContext);
        // todo render score
    }

    //moves everything and checks for collisions
    moveEverything() {
        this.User.move();
        this.Level.move();
        this.User.collisionCheckLevel(Game1.Level.balloon_lines);
        //todo update score
    }

    //renders score
    renderScore(canvasContext) {
        //code from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
        const ctx = canvas;  //.getContext("2d");
        canvasContext.font = "30px serif";
        canvasContext.fillStyle = "#ffffff"; //<======= here
        canvasContext.fillText(("Score: " + this.User.player_points), 10, 30);
    }

    //increases score by amount
    increaseScore(amount) {
        this.player_score += amount;
        return this.player_score;
    }
}