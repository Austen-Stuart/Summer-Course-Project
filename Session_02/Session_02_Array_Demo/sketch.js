let cities = [
    "Warsaw", 
    "Edinburgh", 
    "London"
];

function setup() {
    createCanvas(800, 600);

    let firstElem = cities[0];
    console.log(firstElem);
    let lastElem = cities[cities.length - 1];
    console.log(lastElem);
    cities.push("Detroit");

    lastElem = cities[cities.length - 1];
    console.log(lastElem);
}

function draw() {
    background(220);
}
