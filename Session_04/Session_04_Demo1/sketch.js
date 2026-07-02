let image1;
let image2;
let image3;
let image4;
let tacksX = [];
let tacksY = [];

async function setup() {
    image4 = await loadImage('/Session_04/assets/Wolf.jpg');
    image1 = await loadImage('/Session_04/assets/Forest.jpg');
    image3 = await loadImage('/Session_04/assets/Scene.png');
    image2 = await loadImage('/Session_04/assets/Girl.png');
    createCanvas(800, 600);
}

function draw() {
    background(50,25,0);
    fill(155,130,100);
    rect(50, 50, 700, 500);
    //image 1
    if(pointRect(mouseX, mouseY, 100, 100, 250, 150) == true){
        image(image1, 100, 100, 275,165);
    }else{
        image(image1, 112, 107, 250,150);
    }

    //Image2
    if(pointRect(mouseX, mouseY, 400, 150, 250, 150) == true){
        image(image2, 400, 150, 275,165);
    }else{
        image(image2, 412, 157, 250,150);
    }

    //Image 3
    if(pointRect(mouseX, mouseY, 150, 350, 250, 150) == true){
        image(image3, 150, 350, 275,165);
    }else{
        image(image3, 162, 357, 250,150);
    }

    //Image 4
    if(pointRect(mouseX, mouseY, 450, 300, 250, 150) == true){
        image(image4, 450, 300, 275,165);
    }else{
        image(image4, 462, 307, 250,150);
    }

    for(let i = 0; i < tacksX.length; i++){
        stroke(100,0,0);
        strokeWeight(3);
        for(let j = 0; j < tacksX.length; j++){
            line(tacksX[i], tacksY[i], tacksX[j], tacksY[j]);
        }
        noStroke();
        fill(0,0,100);
        circle(tacksX[i], tacksY[i], 10);
    }


    if(mouseIsPressed){
        tacksX.push(mouseX);
        tacksY.push(mouseY);
    }
}

function pointRect(MouseX, MouseY, ImageX, ImageY, ImageW, ImageH) {

  // is the point inside the rectangle's bounds?
  if (MouseX >= ImageX &&        // right of the left edge AND
      MouseX <= ImageX + ImageW &&   // left of the right edge AND
      MouseY >= ImageY &&        // below the top AND
      MouseY <= ImageY + ImageH) {   // above the bottom
        return true;
  }
  return false;
}