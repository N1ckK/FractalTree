var turtle = {
    x: 0,
    y: 0,
    facing: Math.PI,
    penDown: false,
    penColor: "#000000",
    lineWidth: 1
};

var ctx;

function init(ctx){
    this.ctx = ctx;
}

function forward(length){
    ctx.lineWidth = turtle.lineWidth;
    ctx.strokeStyle = turtle.penColor;
    if (turtle.penDown == true){
        ctx.beginPath();
        ctx.moveTo(turtle.x, turtle.y);
        ctx.lineTo(turtle.x + length * Math.sin(turtle.facing),
                    turtle.y + length * Math.cos(turtle.facing));
        ctx.stroke();
    }
    moveTo(turtle.x + length * Math.sin(turtle.facing),
            turtle.y + length * Math.cos(turtle.facing));
}

function backward(length){
    forward(-length);
}

function moveTo(x, y){
    turtle.x = x;
    turtle.y = y;
}

function right(angle){
    rad = angle * Math.PI / 180;
    turtle.facing = (turtle.facing + rad) % (2 * Math.PI)
}

function left(angle){
    rad = angle * Math.PI / 180;
    turtle.facing = (turtle.facing - rad) % (2 * Math.PI);
}

function penUp(){
    turtle.penDown = false;
}

function penDown(){
    turtle.penDown = true;
}
