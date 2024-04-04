img = "";

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas=createCanvas(640, 480);
    canvas.center();
    textSize(20)
}

function draw() {
    image(img, 0, 0, 640, 480);
    fill("#FF0000");
    text("Dog", 45, 85);
    noFill()
    stroke("#FF0000");
    rect(30, 60, 450, 400);
    fill("#000000");
    text("Cat", 270, 90)
    noFill();
    stroke("#000000")
    rect(255, 65, 320, 400)
}