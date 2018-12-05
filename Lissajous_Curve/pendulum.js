class Pendulum {
    constructor(x, y, height, width, angle, grid) {
        this.x = x;
        this.y = y;
        this.r = height/2;
        this.height = height;
        this.width = width;
        this.update(angle);
        this.grid = grid;
    }
    
    show() {
        stroke(255);
	    noFill();
        ellipse(this.x, this.y, this.height, this.width);
        
        fill(255);
        ellipse(this.dotX, this.dotY, 10,10);

        stroke(255,255,255,50);
        if (this.grid === 'r'){
            line(this.dotX, this.dotY,
                this.dotX+width, this.dotY);
        }
        if (this.grid === 'c'){
            line(this.dotX, this.dotY,
                this.dotX, this.dotY+height);
        }
    }

    update(angle){
        this.dotX = (this.r * cos(angle)) + this.x;
        this.dotY = (this.r * sin(angle)) + this.y;
    }
}