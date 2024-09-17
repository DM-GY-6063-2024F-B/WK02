function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 10, 120);

  // default colors
  rect(10, 10, 200, 100, 0, 20);
  ellipse(100, 200, 140, 100);

  // create some variables
  // for positioning rect and ellipses
  let rectX = 50;
  let rectY = 300;
  let rectH = 100;
  let rectW = rectH;

  fill(252, 255, 0);
  rect(rectX, rectY, rectW, rectH);
  fill(252, 0, 200, 100);
  ellipse(rectX + rectW / 2, rectY + rectH / 2, rectW, rectH);

  // move drawings down
  rectY = 450;

  fill(252, 255, 0);
  rect(rectX, rectY, rectW, rectH);
  fill(252, 0, 200, 100);
  ellipse(rectX + rectW / 2, rectY + rectH / 2, rectW, rectH);

  // specify stroke in hex
  stroke("#536330");
  strokeWeight(10);
  fill(179, 85, 39);
  ellipse(55, 650, 100);

  // change color mode
  colorMode(HSL);
  fill(179, 85, 39);
  rect(120, 600, 100);
}

function draw() {
}
