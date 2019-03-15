console.log("script loaded!");

// creating handle to canvaspane
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var slider = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');

var angle = slider.value;
var ratio = slider2.value / 100;
var size = slider3.value;
var max = size * ratio ** slider4.value;

console.log(angle, ratio, size)

init(ctx);

function tree(){
    console.log(angle, ratio, size, max)
    moveTo(380, 500);
    branch(size);
}

function branch(length){
    penDown();
    forward(length);
    if (length > max){
        left(angle);
        branch(length * ratio);
        penUp();
        backward(length * ratio);
        penDown();
        right(angle);
        right(angle);
        branch(length * ratio);
        penUp();
        backward(length * ratio);
        penDown();
        left(angle);
    }
}

slider.oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle = slider.value;
    tree();
}

slider2.oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ratio = slider2.value / 100;
    tree();
}

slider3.oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    size = slider3.value;
    tree();
}

slider4.oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    max = size * ratio ** slider4.value;
    tree();
}

tree();
