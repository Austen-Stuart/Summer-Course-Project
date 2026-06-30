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
    background(200);

    fill ('black');
    stroke('purple');
    strokeWeight(10);
    circle(300, 300, 300);
    fill ('yellow');
    stroke('yellow');
    strokeWeight(0);
    circle(300, 300, 250);
    //eye 1
    fill('black');
    arc(235, 300, 110, 110, PI+(PI/6),2*PI+(PI/6));
    fill ('cyan');
    arc(255, 290, 10, 20, 0,2*PI);
    //eye 2
    fill('black');
    arc(365, 300, 110, 110, (PI/6),PI+(PI/6));
    fill ('cyan');
    arc(365, 320, 10, 20, 0,2*PI);
    noLoop();
}
