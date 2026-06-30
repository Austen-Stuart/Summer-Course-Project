function setup() {
    createCanvas(600, 600);

    let answer = 42; //Declared a variable
    let fav = 16; //My favorite number

    let fruit1 = "Check";
    let fruit2 = "Kiwi";

    console.log(answer + fav);
    console.log(answer - fav);
    console.log(answer * fav);
    console.log(answer / fav);

    console.log(fruit1 + " " + fruit2);
    console.log(`I like ${fruit1} and ${fruit2}`);

    const name = "Muse";
    //name = "Austen"; //YOu cAnNoT Fix ME
}

function draw() {
    background(30);

    fill ('black');
    stroke('purple');
    strokeWeight(10);
    triangle(75, 180, 150, 300, 220, 180);
    triangle(150, 100, 300, 150, 180, 200);
    triangle(300, 75, 280, 150, 380, 180);
    triangle(450, 120, 450, 300, 380, 180);
    circle(300, 300, 300);
    strokeWeight(0);
    rect(255, 425, 90, 60);
    fill ('purple');
    rect(200, 460, 200, 200,20,20,20,20);
    fill ('black');
    strokeWeight(1);
    circle(290, 520, 10);
    circle(290, 570, 10);
    strokeWeight(0);
    fill ('purple');
    quad(220, 460, 100, 600, 175, 600, 200, 550);
    quad(380, 460, 500, 600, 425, 600, 400, 550);
    fill ('black');
    rect(300, 460, 3, 300);
    triangle(250, 460, 350, 460, 300, 510);
    fill ('yellow');
    stroke('yellow');
    circle(300, 300, 250);
    //eye 1
    fill('black');
    arc(300, 335, 160, 130, 0,PI);
    fill('yellow');
    arc(300, 335, 160, 60, 0,PI);
    fill('navy');
    arc(300, 300, 250, 250, PI+PI/2,PI/2);
    fill('black');
    arc(300, 400, 130, 60, PI+PI/2,2*PI);
    fill('navy');
    arc(300, 400, 130, 30, PI+PI/2,2*PI);
    fill('black');
    arc(235, 310, 110, 110, PI,2*PI);
    fill ('cyan');
    arc(255, 290, 10, 20, 0,2*PI);
    fill('yellow');
    arc(235, 310, 110, 20, PI,2*PI);
    //eye 2
    fill('black');
    arc(365, 275, 110, 110, (PI/12),PI+(PI/12));
    fill ('red');
    arc(345, 300, 10, 20, 0,2*PI);
    noLoop();
}
