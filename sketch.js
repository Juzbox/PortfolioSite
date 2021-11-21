//text("Do you think "+adjective +" "+ user + " would ever " + state + " when "+ method+"?")

function setup() {
  canvas(width,height);  
}
// Move the mouse across the canvas
function draw() {
  background(244, 248, 252);
  line(mouseX, 0, mouseX, 100);
}