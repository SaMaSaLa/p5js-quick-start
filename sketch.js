noStroke();

function setup() {
  // createCanvas(1500, 675);
  createCanvas(400, 400);
  background(200, 200, 200);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  fill(0, 0, 0);
  ellipse(mouseX, mouseY, 80, 80);
}

function mouseClicked() {
  background(200, 200, 200);
}
