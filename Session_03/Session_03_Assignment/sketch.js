let table;
let brooklyn = 0;
let bronx = 0;
let queens = 0;
let manhattan = 0;
let statenIsland = 0;

async function setup() {
    createCanvas(800, 800);

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
    background(220);
    fill('red');
    rect(100, 500, 80, -brooklyn/10);
    fill('orange');
    rect(200, 500, 80, -bronx/10);
    fill('yellow');
    rect(300, 500, 80, -queens/10);
    fill('green');
    rect(400, 500, 80, -manhattan/10);
    fill('blue');
    rect(500, 500, 80, -statenIsland/10);
    noLoop();
}
