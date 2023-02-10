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
            let enemy_ship = new SpaceShip(space_ship_x, space_ship_y, move_distance, circle_radius, color);
            this.army_array.push(enemy_ship);
            space_ship_x += enemy_spacing;
        }
    }

    renderArmy(canvas, canvasContext) {
        this.army_array.forEach(function (enemy, index) {
            enemy.renderSelf(canvas, canvasContext);
        });
    }
}