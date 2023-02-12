class EnemyArmy {
    constructor(army_size, starting_x, starting_y, circle_radius, color, troop_spacing) {
        this.army_size = army_size;
        this.army_array = [];

        this.populateArmy(starting_x, starting_y, 10, circle_radius, color, troop_spacing);
    }


    populateArmy(starting_x, starting_y, move_distance, circle_radius, color, enemy_spacing) {
        let space_ship_x = starting_x;
        let space_ship_y = starting_y;

        for (let i = 0; i < this.army_size; i++) {
            let enemy_ship = new EnemySpaceShip(space_ship_x, space_ship_y, move_distance, circle_radius, color);
            this.army_array.push(enemy_ship);
            space_ship_x += enemy_spacing;
        }
    }

    renderArmy(canvas, canvasContext) {
        this.army_array.forEach(function (enemy, index) {
            if (enemy.alive) {
                enemy.renderSelf(canvas, canvasContext);
            }
        });
    }

    collisionCheck(bullet_array) {
        // console.log("collisionCheck() in EnemyArmy.js");
        let points_won = 0;
        this.army_array.forEach(function (enemy, index) {

            // let collision = enemy.collisionCheck(bullet_array);
            // if (collision) {
            //     enemy.destroyed();
            // }
            let points_from_enemy = enemy.collisionCheck(bullet_array);
            if (points_from_enemy) {
                enemy.destroyed();
                points_won += points_from_enemy;
            }

        })
        return points_won;
    }
}