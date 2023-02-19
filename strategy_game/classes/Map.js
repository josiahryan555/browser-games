class Map {
    constructor(tile_side_length, percent_obstilces, percent_cities, canvas_width, canvas_height) {
        this.tile_side_length = tile_side_length;
        this.percent_obstilces = percent_obstilces;
        this.percent_cities = percent_cities;
        this.tiles = [];
        this.player_move_queue = [];
        this.enemy_move_queue = [];
        // this.tile_length = 28;
        this.tile_spacing = 4;
        this.num_cols = Math.floor(canvas_height / (tile_side_length + (this.tile_spacing)));
        this.num_rows = Math.floor(canvas_width / (tile_side_length + (this.tile_spacing)));
        console.log("this.num_cols: " + this.num_cols);
        console.log("this.num_rows: " + this.num_rows);
        this.canvas_height = canvas_height;
        this.canvas_width = canvas_width;
        console.log("Map.calcExtraPadding(this.canvas_height): " + this.calcExtraPadding(this.canvas_height));
    }

    // DOESNT WORK ;(
    //returns half of the remaining space
    //param: canvas_width or canvas_height
    calcExtraPadding(canvas_dimention) {
        //find how much extra space there is
        console.log("Math.floor(canvas_dimention % (tile_side_length + (this.tile_spacing))): " + Math.floor(canvas_dimention % (this.tile_side_length + (this.tile_spacing))));
        let padding = Math.floor(canvas_dimention % (this.tile_side_length + (this.tile_spacing)));

        //return half
        return padding / 2;
    }

    //creates map
    createMap() {
        //this code will center the first col of tiles
        //1. take available space
        //2. divide / 2 so that padding will be split on both sides of the screen
        let half_extra_x_padding = this.calcExtraPadding(this.canvas_width);
        let half_extra_y_padding = this.calcExtraPadding(this.canvas_height);

        let top_y = half_extra_y_padding; // adds a little cusion to the left most row
        for (let i = 0; i < this.num_cols; i++) {
            let col = [];
            let left_x = half_extra_x_padding; // adds a little cusion to the left most row

            for (let j = 0; j < this.num_rows; j++) {
                //randomly create tile
                let tile = new Tile(left_x, top_y, this.tile_side_length, this.tile_side_length, 0, "lightgrey");
                left_x += this.tile_side_length + this.tile_spacing;
                col.push(tile);
            }
            top_y += this.tile_side_length + this.tile_spacing;
            this.tiles.push(col);
        }
        console.log(this.tiles);
    }

    render(cavasContext) {
        let left_x = 0;
        let top_y = 0;
        for (let i = 0; i < this.num_cols; i++) {
            let col = [];

            for (let j = 0; j < this.num_rows; j++) {
                //randomly create tile
                this.tiles[i][j].render(cavasContext);
                left_x += this.tile_width;
            }
            top_y += this.tile_height;
        }
    }

    //takes in the tile of movement start [x,y], the end tile [x,y](MUST BE AN AJACENTE TILE!!!), and the percent of troops moving
    // adds move to move queue (push & shift)
    handlePlayerInput(start_tile, end_tile, percent) {
        let move = { start_tile, end_tile, percent }
        this.player_move_queue.push(move);
        // console.log("Map.js handlePlayerInput move: ");
        // console.log(move);
    }

    handlePlayerMove() {

    }

    handleTick() {
        // make next move happen
        this.handlePlayerInput([0, 0], [0, 1], .5);
        let player_move = this.player_move_queue.shift();
        // console.log(player_move);


        // this.handleEnemyMove([0, 0], [0, 1]);
        // console.log("self.player_move_queue before .shift(): ");
        // console.log(this.player_move_queue[0]);

        // console.log(self.player_move_queue);
        // let enemy_move = this.enemy_move_queue.shift();
        // console.log("enemy_move " + enemy_move);
        // console.log("self.player_move_queue: " + self.player_move_queue);


        // User move
        // Enemy move
        // let start_tile_x = move[0]
        // this.tiles[]

    }

    //puts `army_size` number of `color` trops on `x`, `y`
    placeTeam(army_col, army_row, army_size, color) {
        let tile = this.tiles[army_col][army_row]; //get the tile
        // console.log(tile);
        let new_tile = new Tile(tile.left_x, tile.top_y, tile.width, tile.height, army_size, color);
        this.tiles[army_col][army_row] = new_tile;
        console.log(new_tile);


    }

    //should use this.placeTeam() to set up the map
    setupMap() {
        //should randomize placement sometime
        this.placeTeam(10, 10, 10, 'green');
        this.placeTeam(9, 1, 10, 'red');

    }


}


// - a grid of tiles
//   DATA:
//   - tiles [[],[],[]]
//   - future_moves_ queue = []
//   FUNCTIONS:
//   - render() - renders all tiles
//   - handleTick() - handles 1 game turn: adds 1 army to cities, handle troop movement (moving, and fighting),
//   - handleMove(start tile, end tile) -
//     - append move [] into futrue_moves_quque

