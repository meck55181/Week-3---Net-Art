/* DM3014 Interactive Devices, Ashley Hi 2026
 * Week 3 - Net Art
 * Button Exercise
*/

// TARGET: define the button's target region
let bx, by, bw = 160, bh = 56;

let clickCount = 0;
 
function setup() {
  createCanvas(400, 400);
  bx = width / 2 - bw / 2; // center the button horizontally
  by = 30;
}
 
function draw() {
  background(30);
  fill(244);
  text('kills: ' + clickCount, 32, 32);
 
  // VALIDATE TARGET: is the mouse over the target right now?
  let hovering =
    mouseX > bx && mouseX < bx + bw &&
    mouseY > by && mouseY < by + bh;
  
 
  // SIGNIFIER: appearance change to indicate response
  noStroke();
  if (hovering && !mouseIsPressed) {
    fill('#ff0000');
  }
  else if (hovering && mouseIsPressed) {
    fill('#fffb87');
  }
  else {
    fill(30);


  }
  rect(bx, by, bw, bh, 10);
  fill(244);
  ellipse(bx + 30, by + 12, 10, 10);
  ellipse(bx + 130, by + 12, 10, 10);

  fill(244);
  textAlign(CENTER, CENTER);
  text('EEEEEEEEEE', bx + bw / 2, by + bh / 2 - 6);

  cursor(hovering ? HAND : ARROW);
}
 
// EVENT -> RESPONSE: only counts if the click lands inside the target
function mousePressed() {
  let hit =
    mouseX > bx && mouseX < bx + bw &&
    mouseY > by && mouseY < by + bh;
 
  if (hit) {
    clickCount++;
  }

  bx = random(0, width - bw);
  by = random(0, height - bh);

  fill(255, 0, 0);
  ellipse(10, 10, 20, 20);
}