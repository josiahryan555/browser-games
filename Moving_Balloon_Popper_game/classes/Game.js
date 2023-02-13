//This game class will contain multiple level classes (which contain multiple balloon lines)

class Game {
    constructor(canvas) {
        this.User = new XMovingPlayerShip(500, 500, 10, 45, 'green');
        this.next_level_num = 1;
        this.Level = this.makeLevel(this.next_level_num);
        this.canvas = canvas;
        this.game_playing = true;
        this.game();

    }

    //returns level object with level_num determining the difficulty
    makeLevel(level_num) {
        let level = new Level(1, 3, 10, level_num);
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
}