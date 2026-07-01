function setup() {
    createCanvas(800, 600);
    let originX = 0;
    let originY = 0;
    numStars = 15;
    numRows = 15;
    starColor = ['white','lavender','lightblue','white','white','lightyellow','cream','lightblue','white','lavender','white','lightyellow','lightgreen','white','white' ]
}

function draw() {
    background(0,0,50);

    
    for (let j = 0; j < numRows; j++) {
        for (let i = 0; i < numStars; i++) {
            drawStar(70*i+random(-30,30)+50,70*j+random(-30,30), random(0.1,0.7), starColor[i]);
        }
    }
    drawMoon(random(100,700),random(100,200));
    
    noLoop();
}

function drawMoon(centerX, centerY) {
    push();
    translate(centerX, centerY);
    noStroke();
    fill('yellow');
    circle(50,50,140);
    fill('lightyellow');
    circle(55,45,130);
    fill('yellow');
    circle(100,40,20);
    circle(75,10,30);
    circle(50,0,10);
    pop();
}

function drawStar(centerX, centerY, scale, color) {
    push();
    fill(color);
    noStroke();
    let points = 4;
    translate(centerX, centerY);
    for (let i = 0; i < points; i++) {
        triangle(0, 10*scale, -10*scale, -10*scale, 10*scale, -10*scale);
        rotate(PI/2);
        translate(-10*scale, 10*scale);
    }
    pop();
}
