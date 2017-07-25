class DrawPoint {
    x: number;
    y: number;

    constructor(x?: number, y?: number) { //make parameter optional. 
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X : " + this.x + ", Y : " + this.y );
    }

}


let point = new DrawPoint(1, 2);
//point.x = 1;
//point.y = 2;
point.draw();