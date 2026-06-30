let spacing = 20;
let rowCount = 20;
let circlesCount = 20;
let offset = spacing *0.5;

function setup() {
    createCanvas(800, 600);
    noLoop();

    fill('green');
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    background(220);
    fill('red');
    for(let i = 0; i < rowCount; i++){
        for(let j = 0; j < circlesCount; j++){
            DrawTriangle(
                j * spacing + offset, 
                i * spacing + offset
            );
        }
    }
}

function DrawTriangle(centerX, centerY){
            push();
            translate(centerX, centerY);
            let rotation = random([0,90,180,270]);
            rotate(rotation);
            triangle(
                10,
                10,

                -10,
                -10,

                -10,
                10
            );
            pop();
}
