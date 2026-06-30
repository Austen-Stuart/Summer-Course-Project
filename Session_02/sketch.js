function setup() {
    createCanvas(400, 300);
    greeting();
}

function draw() {
    background(0,0,220);
    drawRacoon(200, 150);
    fill('black');
}

function greeting(){
    console.log("Hello World");
}

function drawRacoon(centerX, centerY){
    translate(centerX, centerY);
    noStroke();
    fill('White');
    arc(0, 0, 100, 60, 0,2*PI);
    fill('Black');
    arc(15, 0, 50, 30, 0,2*PI);
    arc(-15, 0, 50, 30, 0,2*PI);
    fill('White');
    circle(15, 0, 10);
    circle(-15, 0, 10);
    fill('DarkGrey');
    triangle(-10, 10, 0, 20, 10, 10);
    fill('White');
    triangle(-50, 0, -40, -40, -10, -30);
    triangle(50, 0, 40, -40, 10, -30);
    fill('DarkGrey');
    triangle(-45, -10, -35, -35, -10, -25);
    triangle(45, -10, 35, -35, 10, -25);
}

function drawFlower(centerX, centerY){
    translate(centerX, centerY);
    noStroke();
    fill('yellow');
    ellipse(0, 0, 100, 100);
    fill('red');
    ellipse(0, 50, 50, 50);
    ellipse(50, 0, 50, 50);
    ellipse(0, -50, 50, 50);
    ellipse(-50, 0, 50, 50);
}