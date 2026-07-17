// based on: https://editor.p5js.org/ml5/sketches/XFnGW770Y

// more about ml5: https://ml5js.org/

let faceapi;
let video;
let detections;

// by default all options are set to true
const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};

function setup() {
  createCanvas(360, 270);

  // load up your video
  // https://p5js.org/reference/p5/createCapture/
  video = createCapture(VIDEO);
  video.size(width, height);
  // video.hide(); // Hide the video element, and just show the canvas
  faceapi = ml5.faceApi(video, detectionOptions, modelReady);
  textAlign(CENTER);
}

function modelReady() {
  console.log("ready!");
  // console.log(faceapi);
  faceapi.detect(gotResults);
}

function gotResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result)
  detections = result;

  // background(220);
  background(255);
  image(video, 0, 0, width, height);
  if (detections) {
    if (detections.length > 0) {
      // console.log(detections)
      drawBox(detections);
      drawSun(detections);
      drawLandmarks(detections);
    }
  }
  faceapi.detect(gotResults);
}

function drawBox(detections) {
  for (let i = 0; i < detections.length; i += 1) {
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x;
    const y = alignedRect._box._y;
    const boxWidth = alignedRect._box._width*1.5;
    const boxHeight = alignedRect._box._height*1.75;

    //noFill();
    fill('lightblue');
    noStroke();
    //stroke(161, 95, 251);
    //strokeWeight(2);
    rect(x-x/5, y-y/2.5, boxWidth, boxHeight);
  }
}

function drawSun(detections) {
  for (let i = 0; i < detections.length; i += 1) {
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x;
    const y = alignedRect._box._y;
    const boxWidth = alignedRect._box._width;
    const boxHeight = alignedRect._box._height;

    noStroke();
    fill('orange');
    circle(x+boxWidth/2,y+boxHeight/2.5,boxWidth*1.1);
    fill('yellow');
    circle(x+boxWidth/2,y+boxHeight/2.5,boxWidth);
    fill('lightyellow');
    circle(x+boxWidth/2,y+boxHeight/2.5,boxWidth*0.9);
  }
}

function drawLandmarks(detections) {
  noFill();
  stroke(161, 95, 251);
  strokeWeight(2);

  for (let i = 0; i < detections.length; i += 1) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;
    
    
    const leftEyeCentre = getCentreVector(leftEye);
    const rightEyeCentre = getCentreVector(rightEye);
    const noseCentre = getCentreVector(nose);
    
    drawPart(mouth, true);
    drawPart(nose, false);
    //drawPart(leftEye, true);
    lazerEyes(leftEyeCentre, rightEyeCentre);
    drawEye(leftEye);
    //drawGlasses(leftEyeCentre, rightEyeCentre, noseCentre);
    drawPart(leftEyeBrow, false);
    //drawPart(rightEye, true);
    drawEye(rightEye);
    drawPart(rightEyeBrow, false);
    //lazerEyes(leftEyeCentre, rightEyeCentre);
    //drawCheeksMakeup(noseCentre, leftEyeCentre, rightEyeCentre);
  }
}

function drawPart(feature, closed) {  
  noFill();
  stroke("Orange");
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < feature.length; i += 1) {
    const x = feature[i]._x;
    const y = feature[i]._y;
    vertex(x, y);
  }

  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}

function drawEye(feature) {
  
  let averageX = 0;
  let averageY = 0;
  
  for (let i = 0; i < feature.length; i += 1) {
    averageX += feature[i]._x;
    averageY += feature[i]._y;
  }
  
  averageX /= feature.length;
  averageY /= feature.length;
  text('👁️', averageX, averageY);

}

function lazerEyes(leftEyeCentre, rightEyeCentre){
  stroke('red');
  strokeWeight(10);
  line(leftEyeCentre.x,leftEyeCentre.y, 100, 360);
  line(rightEyeCentre.x,rightEyeCentre.y, 280, 360);
  stroke('lightred');
  strokeWeight(5);
  line(leftEyeCentre.x,leftEyeCentre.y, 100, 360);
  line(rightEyeCentre.x,rightEyeCentre.y, 280, 360);
  stroke('white');
  strokeWeight(2);
  line(leftEyeCentre.x,leftEyeCentre.y, 100, 360);
  line(rightEyeCentre.x,rightEyeCentre.y, 280, 360);
}

function drawHat(leftEyeCentre, rightEyeCentre, noseCentre) {
    
  noStroke();
  
  let avgEye = createVector(
    leftEyeCentre.x + rightEyeCentre.x,
    leftEyeCentre.y + rightEyeCentre.y,
  );
  avgEye.mult(0.5);
  
  // circle(avgEye.x, avgEye.y, 50);

  let hatStartY = avgEye.add(createVector(0, avgEye.y - noseCentre.y));
  
  let halfHatWidth = (avgEye.x - leftEyeCentre.x) * 1.3;
  let noseEyeDistY = noseCentre.y - avgEye.y;
  let hatStartHeight = noseCentre.y - (noseEyeDistY);
  let hatHeight = noseEyeDistY * 2;

  fill('lightblue');

  triangle(
    avgEye.x - halfHatWidth, // x1
    hatStartHeight, // y1
    avgEye.x, //x2
    hatStartHeight - hatHeight, // y2
    avgEye.x + halfHatWidth,
    hatStartHeight,
  );
  
  fill('lightyellow');
  
  circle(avgEye.x, hatStartHeight - hatHeight, 20);
}

function getCentreVector(feature) {
  let averageVector = createVector(0, 0);

  feature.forEach(featurePoint => {
    averageVector.x += featurePoint._x;
    averageVector.y += featurePoint._y;
  })
  
  return averageVector.mult(1/feature.length);
}

function drawCheeksMakeup(noseCentre, leftEyeCentre, rightEyeCentre) {
  fill('lightcoral');
  let offsetLeftX = Math.abs(noseCentre.x - leftEyeCentre.x) * 1.2;
  let offsetRightX = Math.abs(noseCentre.x - rightEyeCentre.x) * 1.2;
  circle(
    noseCentre.x - offsetLeftX,
    noseCentre.y,
    15,
  )
    circle(
    noseCentre.x + offsetRightX,
    noseCentre.y,
    15,
  )
}