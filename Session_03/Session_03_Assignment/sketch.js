let table;
let brooklyn = 0;
let bronx = 0;
let queens = 0;
let manhattan = 0;
let statenIsland = 0;

async function setup() {
    createCanvas(700, 700);

  table = await loadTable('/Session_03/assets/Housing.csv', ',', 'header');

  // Get the second row (index 1)
  let row = table.getRow(1);

  // Set text properties
  fill(0);       // Set text color to black
  textSize(16);  // Adjust text size as needed

  // Display each column value in the row on the canvas.
  // Using an offset for y-position so each value appears on a new line.
  for (let c = 1; c < table.getRowCount(); c++) {
    let city = row.getString(7);
    if(city == "Brooklyn"){
        brooklyn++;
    }
    if(city == "Bronx"){
        bronx++;
    }
    if(city == "Queens"){
        queens++;
    }
    if(city == "Manhattan"){
        manhattan++;
    }
    if(city == "Staten Island"){
        statenIsland++;
    }
    //text(brooklyn, 10, 30 + c * 20);
    row = table.getRow(c);
  }
    /*
    text(brooklyn, 10, 30 * 20);
    text(bronx, 10, 30 * 21);
    text(queens, 10, 30 * 22);
    text(manhattan, 10, 30 * 23);
    text(statenIsland, 10, 30 * 24);
    */
}

function draw() {
    background(0,0,50);
    noStroke();
    fill(0,0,70);
    for(let i = 0; i < 50; i++){
        circle(random(0,700), random(0,400), random(0,200));
    }
    fill(0,0,90);
    for(let i = 0; i < 30; i++){
        circle(random(0,700), random(0,400), random(0,150));
    }
    fill(40);
    for(let i = 0; i < 5; i++){
        rect(0, 700, 700, -180);
    }
    fill(40);
    for(let i = 0; i < 5; i++){
        rect(85+100*i, 560, 80, -1*random(130, 200));
    }
    fill(60);
    for(let i = 0; i < 6; i++){
        rect(70+100*i, 580, 80, -1*random(100, 150));
    }
    drawBuilding(100, 600, brooklyn);
    drawBuilding(200, 600, bronx);
    drawBuilding(300, 600, queens);
    drawBuilding(400, 600, manhattan);
    drawBuilding(500, 600, statenIsland);

    noLoop();
}

function drawBuilding(x,y,size){
    fill(random(80,130));
    rect(x, y, 80, -size/10 - 50);
    let windows = Math.floor(size/500)+1;
    for(let i = 0; i < windows; i++){
        fill('Yellow');
        rect(x + 10, y -size/10 - 30 + (i * 40), 20, 20);
        rect(x + 50, y -size/10 - 30 + (i * 40), 20, 20);
    }
}
