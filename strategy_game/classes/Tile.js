class Tile {
    constructor(leftX, topY, height, width, army_size, color) {
        this.color = color;
        this.passable = true;
        this.city = false;
        this.army_size = army_size;
        this.left_x = leftX;
        this.top_y = topY;
        this.spacing = 4;
        this.height = height;
        this.width = width;
    }

    render(cavasContext) {
        colorRect(this.left_x, this.top_y, this.width, this.height, this.color, canvasContext);

        if (this.army_size > 0) {
            //writes text
            canvasContext.font = "20px serif";
            canvasContext.fillStyle = "#000000"; //<======= here
            //determine text offset from tile top let coordinates from
            let font_size = 20; //see three lines above
            let adjusted_left_x = this.width - font_size; //20 for the font size
            let adjusted_top_y = this.height - (font_size / 2);
            canvasContext.fillText(this.army_size, this.left_x + adjusted_left_x, this.top_y + adjusted_top_y);
        }
    }

    // handleTick() {

    // }
}