class DrawPt {

    constructor(private _x?: number, private _y?:number) {
    }

    draw() {
        console.log("X : "+ this._x + " Y : " + this._y);
    }

    /* getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0)
            throw new Error("Value should be positive");

        this.x = value;
    } */

    get x() {
        return this._x;
    }

    set x(value) {
         if (value < 0)
            throw new Error("Value should be positive");

        this._x = value;
    }
}

let drawPt = new DrawPt(1, 2);
//let x = drawPt.getX();
//drawPt.setX(5);

let x = drawPt.x;
drawPt.x = 5;

drawPt.draw();