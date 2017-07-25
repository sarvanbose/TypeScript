interface Point {
     x: number,
     y: number
}

let drawPoint = (point: Point) => {
    console.log("X :" + point.x + ", Y: " + point.y);
}

drawPoint({
    x: 1,
    y: 2
})
