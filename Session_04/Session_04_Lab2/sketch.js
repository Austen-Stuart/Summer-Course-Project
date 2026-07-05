let capture;
let currentShape;
let stickerX = [];
let stickerY = [];
let stickerShape = [];

let drawing = [];

let canvasX = 600;
let canvasY = 400;

let mode = 1;

let mouseWasnt = true;

const pen = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0
}

function setup() {
  createCanvas(600, 400);
  currentShape = 0;

  slider = createSlider(0, 255);
  slider.position(100, 160);
  slider.size(200);

  capture = createCapture(VIDEO);
  capture.size(460, 400);
  capture.hide();
  background(200);

  button = createButton('Change to Sticker', 0);
  button.position(100, 100);
  button.mousePressed(randomColor);

  button2 = createButton('Change to Pen', 0);
  button2.position(100, 130);
  button2.mousePressed(setToPen);
}

function draw() {
  // Set the background to gray.
  let previousShape = currentShape;
  currentShape = Number(button.value());
  let backColor = slider.value();
  background(0,backColor,0);
  //console.log(currentShape);

  image(capture, 100, 50, 400, 300);

  fill(random(175,200),0,0);
    for(let i = 0; i < drawing.length; i++){
        noStroke();
        triangle(drawing[i].x1, drawing[i].y1, drawing[i].x2, drawing[i].y2, drawing[i].x3, drawing[i].y3);
    }


  for(let i = 0; i < stickerShape.length; i++){
        noStroke();
        fill(0,0,200);
        if(stickerShape[i] == 0){
            circle(stickerX[i], stickerY[i], 30);
        }
        if(stickerShape[i] == 1){
            square(stickerX[i], stickerY[i], 30);
        }
        if(stickerShape[i] == 2){
            circle(stickerX[i], stickerY[i], 30);
        }
        if(stickerShape[i] == 3){
            square(stickerX[i], stickerY[i], 30);
        }
    }

    if(mode == 1){
        if(mouseIsPressed){
            const triangle = Object.create(pen);
            triangle.x1 = mouseX + random(-30,30);
            triangle.y1 = mouseY + random(-30,30);
            triangle.x2 = mouseX + random(-30,30);
            triangle.y2 = mouseY + random(-30,30);
            triangle.x3 = mouseX + random(-30,30);
            triangle.y3 = mouseY + random(-30,30);
            drawing.push(triangle);
        }
    }

    if(mouseIsPressed && mouseWasnt == true && mode == 0){
        stickerX.push(mouseX);
        stickerY.push(mouseY);
        stickerShape.push(currentShape);
        mouseWasnt = false;
    }

    if(mouseIsPressed == false){
        mouseWasnt = true;
    }

    
}

function randomColor() {
    mode = 0;
  let c = (currentShape + 1) % 4;
  button.value(c);
}

function setToPen(){
    mode = 1;
}