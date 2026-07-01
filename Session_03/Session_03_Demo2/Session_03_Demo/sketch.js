// Source: https://beta.p5js.org/reference/p5/loadTable/

let table;

async function setup() {
  // Create a 200x200 canvas
  createCanvas(200, 200);

  // Load the CSV file with a header row
  // NOTE: adjust the file path - it should start in the folder in which you are running the server
  // ideally: the main repo folder
  table = await loadTable('/Session_03/assets/air-quality.csv', ',', 'header');

  // Get the second row (index 1)
  let row = table.getRow(1);

  // Set text properties
  fill(0);       // Set text color to black
  textSize(16);  // Adjust text size as needed

  // Display each column value in the row on the canvas.
  // Using an offset for y-position so each value appears on a new line.
  for (let c = 0; c < table.getColumnCount(); c++) {
    text(row.getString(c), 10, 30 + c * 20);
  }
}

function draw() {
    // background(220);
}