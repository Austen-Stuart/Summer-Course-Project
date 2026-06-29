function setup() {
    createCanvas(600, 600);

    let answer = 42; //Declared a variable
    let fav = 16; //My favorite number

    let fruit1 = "Duran";
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
}
