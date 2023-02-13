//This game class will contain multiple level classes (which contain multiple balloon lines)

class Game {
    constructor(canvas) {
        this.User = new XMovingPlayerShip(500, 500, 10, 45, 'green');
        this.next_level_num = 1;
        this.Level = this.makeLevel(this.next_level_num);
        this.canvas = canvas;
        this.game();
        this.game_playing = true;

    }

    //returns level object with level_num determining the difficulty
    makeLevel(level_num) {
        Level = new Level(1, 3, 10, level_num);
        this.next_level_num += 1; //updates level_num
        return Level;
    }

    //game loop
    game() {
        while (this.game_playing) {
            //game loop
            this.handleLevelChange();
        }
    }

    //checks if there needs to be a level change
    handleLevelChange() {
        if (this.Level.finished(600)) {
            this.Level = this.makeLevel(this.next_level_num);
        }
    }
}