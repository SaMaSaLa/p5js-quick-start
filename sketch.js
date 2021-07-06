noStroke();

function setup() {
    createCanvas(1500, 675);
    background(200, 200, 200);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    fill(0, 0, 0);
    rect(mouseX, mouseY, 80, 80);
}

function mouseClicked() {
    background(200, 200, 200);
}
