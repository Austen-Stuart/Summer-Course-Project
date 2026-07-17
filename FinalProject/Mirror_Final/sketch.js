let faceMesh;
let triangles;
let video;
let colorIndex;
let newMask;
let mask;
let faceCount;
let faces = [];
let countDown;
let countdownMax;
let flash;
let glassAppear;
let leftEye = [33,246,161,160,159,158,157,173,133,155,154,153,145,144,163,7];
let rightEye = [263,466,388,387,386,385,384,398,362,382,381,380,374,373,390,249];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };

let handPose;
let hands = [];
let handCount;
let changeMask;
let handCountdown;

let rippleArray = [];

//Objects to make the ripple effect when a hand is detected
const ripple = {
  alpha: 1,
  size: 1,
  speed: 0,
  x: 0,
  y: 0
};

function preload() {
  // Load the faceMesh model and handPose model
  faceMesh = ml5.faceMesh(options);
  handPose = ml5.handPose();
}

function setup() {
  //Create canvas and set the ID where the sketch is located
  const canvas = createCanvas(640, 480);
  canvas.parent("p5_sketch"); 
  //Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
  triangles = faceMesh.getTriangles();
  handPose.detectStart(video, gotHands);
  //Preset variables to beginning default values
  newMask = 0;
  mask = -1;
  maxMask = 5;
  colorIndex = 0;
  faceCount = 0;
  countdownMax = 30;
  countDown = 0;
  handCountdown = 0;
  flash = 0;
  changeMask = true;
  glassAppear = true;
}

function draw() {
  clear();
  background(0);
  noStroke();
  //Hide video
  //image(video, 0, 0, width, height);

  //If the number of faces detected is different than the previous frame, start a countdown to change the mask
  if(faceCount != faces.length){
    //If the countdown reaches 0, perform a check
    if(countDown <= 0){
      faceCount = faces.length;
      colorIndex = -100;
      //If a face is detected, reset the countdown, otherwise, flash the screen and change the mask to default
      if(faceCount > 0){
        countDown = countdownMax;
      }else{
        flash = 100;
        glassAppear = true;
        newMask = 0;
        mask = -1;
      }
    }else{
      countDown--; //Countdown is still running, decrement it
    }
  }else{
    //If the number of faces detected is the same as the previous frame, reset the countdown if a face is detected
    if(faceCount > 0){
      countDown = countdownMax; 
    }
    faceCount = faces.length; //Set the faceCount to the current number of faces detected
  }

  //Draw each of the ripple objects for the effect
  for(let i = 0; i < rippleArray.length; i++){
    let ripple = rippleArray[i];
    rippleShade = color(200,0,200);
    rippleShade.setAlpha(255 * ripple.alpha);
    stroke(rippleShade);
    strokeWeight(25);
    circle(ripple.x,ripple.y,ripple.size);
    ripple.size += ripple.speed;
    ripple.alpha -= 0.01;
    if(ripple.alpha <= 0){
      rippleArray.shift();
    }
  }
  
  noStroke();
  // Draw all the tracked face points
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    
    // Draw all filled points of the face
    triangles = faceMesh.getTriangles();
    for (let j = 0; j < triangles.length; j++) {
      let index1 = triangles[j][0];
      let index2 = triangles[j][1];
      let index3 = triangles[j][2];

      let point1 = face.keypoints[index1];
      let point2 = face.keypoints[index2];
      let point3 = face.keypoints[index3];

      let sumX = point1.x + point2.x + point3.x;
      let averageX = sumX/3;

      let sumY = point1.y + point2.y + point3.y;
      let averageY = sumY/3;
      
      if(colorIndex >= j){
        fill(fillTriangle(j,averageX,averageY,newMask));
      }else{
        fill(fillTriangle(j,averageX,averageY,mask));
      }
            
      triangle(point1.x,point1.y,point2.x,point2.y,point3.x,point3.y);
    }

    //UNUSED Draws each point of the face mesh
    /*
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      noFill();
      
      //All left eye points
      for(let k = 0; k < leftEye.length; k++){
        if(j == leftEye[k]){
          fill(255, 0, 0);
        }
      }

      for(let k = 0; k < rightEye.length; k++){
        if(j == rightEye[k]){
          fill(0, 0, 255);
        }
      }
      
      noStroke();
      circle(keypoint.x, keypoint.y, 5);
    }
    */
    
    //If the colorIndex is less than triangles, increment to fill in more triangles
    if(colorIndex < triangles.length){
      colorIndex += 10;
    }else{
      glassAppear = false;
    }
  }

  /*
  //DRAW HANDS
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(640-keypoint.x, keypoint.y, 10);
    }
  }
  */

  handCount = hands.length; //Get the number of hands detected
  //If no hands are detected, start a countdown to mark hand as down
  if(handCount <= 0){
    changeMask = true;
    handCountdown--;
  }else{
    //hand is up, check to see if we need to change the mask and that a shift isn't already in progress
    if(changeMask == true && faceCount > 0 && colorIndex >= triangles.length){
      if(handCountdown <= 0){
        changeMask = false;
        mask = newMask;
        newMask = mask + 1;
        newMask = newMask % maxMask;
        colorIndex = -100;
        handCountdown = countdownMax;
        //Create three ripple objects for the hand detected
        for (let i = 0; i < hands.length; i++) {
          let hand = hands[i];
          let keypoint = hand.keypoints[i];
          const ripple1 = {alpha: 1, size: 1, speed: 30, x: 640-keypoint.x, y: keypoint.y};
          rippleArray.push(ripple1);
          const ripple2 = {alpha: 1, size: 1, speed: 20, x: 640-keypoint.x, y: keypoint.y};
          rippleArray.push(ripple2);
          const ripple3 = {alpha: 1, size: 1, speed: 10, x: 640-keypoint.x, y: keypoint.y};
          rippleArray.push(ripple3);
        }
      }else{
        handCountdown = countdownMax; //reset the countdown if a hand is detected and we dont change mask yet
      }
      
    }
  }
  
  /*
  if(mouseIsPressed === true){
    newMask += 1;
    if(newMask > maxMask){
      newMask = 0;
    }
  }
  */
  
  
  //DRAW MIRROR GLASS
    let glass = color(100,50,100);
    if(glassAppear == true){
      if(colorIndex > 50){
        glass.setAlpha(150-(colorIndex-50)/4);
      }else{
        glass.setAlpha(150);
      }
      fill(glass);
    }else{
      noFill();
    }
    quad(0,-50,-50,0,500,700,500,500);
    quad(200,-50,150,0,650,550,650,500);

    //MIRROR FRAME AND BACKGROUND
    noFill();
    stroke(60);
    strokeWeight(270);
    ellipse(320,240,650,800);

    stroke(40);
    strokeWeight(3);
    line(0,50,170,50);
    for(let i = 0; i < 4; i++){
      line(0,50+100*i,130,50+100*i);
    }
    line(0,450,170,450);
    
    line(640,50,480,50);
    for(let i = 0; i < 4; i++){
      line(640,50+100*i,510,50+100*i);
    }
    line(640,450,480,450);

    line(50,0,50,50);
    line(50,150,50,250);
    line(50,350,50,450);
    line(590,0,590,50);
    line(590,150,590,250);
    line(590,350,590,450);
  
    stroke(120,100,120);
    strokeWeight(50);
    ellipse(320,240,390,530);
    stroke(90,70,90);
    strokeWeight(20);
    ellipse(320,240,360,500);

    stroke(80,65,80);
    fill(120,100,120);
    strokeWeight(10);
    rect(90, 220, 70, 50, 20);
    fill('purple');
    strokeWeight(0);
    circle(140, 245, 20);
    fill('lavender');
    strokeWeight(0);
    circle(143, 242, 7);
    fill('purple');
    strokeWeight(0);
    circle(115, 245, 13);
  
    stroke(80,65,80);
    fill(120,100,120);
    strokeWeight(10);
    rect(480, 220, 70, 50, 20);
    fill('purple');
    strokeWeight(0);
    circle(500, 245, 20);
    fill('lavender');
    strokeWeight(0);
    circle(503, 242, 7);
    fill('purple');
    strokeWeight(0);
    circle(525, 245, 13);
  
  noStroke();
  let flashShade = color(255);
  flashShade.setAlpha(200*(flash*0.01));
  fill(flashShade);
  rect(0,0,640,480);
  
  //TEST MESSAGES: UNUSED
  //fill('white');
  //text(`${handCountdown}`,  50, 50);
  //text(`${newMask}`,  50, 70);
  noFill();
  
  //Fade the flash if the flash is on screen
  if(flash > 0){
    flash -= 3;
  }
}

function fillTriangle(j, averageX, averageY, maskType){
  let newClor = 'black';
  //Check to see the current mask type and fill the triangle with the appropriate color
  switch(maskType){
    case -1:
      newClor = color(0);
      break;
    case 1:
      if(j < triangles.length/4){
        newClor = color(200, 200, 0);  //If one of the first quarter of triangles, fill with yellow
      }else if(j < triangles.length/2){
        newClor = color(50, 50, 0);  //If one of the second quarter of triangles, fill with dark yellow
      }else if(j < (triangles.length/2 + triangles.length/4)){
        newClor = color(200, 200, 0); //If one of the third quarter of triangles, fill with yellow
      }else{
        newClor = color(50, 50, 0); //If one of the last quarter of triangles, fill with dark yellow
      }
      break;
    case 2:
      newClor = color(0, 0, random(150,200)); //Set shade of blue to a random value between 150 and 200
      break;
    case 3:
      newClor = color(j/4); //Set shade of gray based on the triangle index
      break;
    case 4:
      newClor = color(j/2, 800-averageX*2, 605-averageY*2); //Red = index, blue = y position, green = x position
      break;
    default:
      newClor = color(605-averageY, 505-averageY, 605-averageY); //Set shade of white/purple based on the y position of the triangle
  }
  return newClor; //Return the color to fill the triangle with
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}