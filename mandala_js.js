var i = 0;
var elapsed = 0;
var vari = 1;
var pause;
var begin;
var dataX = new Array(255);
var courier;
var rand;

function setup() {
  createCanvas(800, 800);
  pixelDensity(displayDensity());
  smooth(8);
  frameRate(60);
  background(255);
  mouseX = width/2;
  mouseY = height/2;
  begin = false;
  pause = false;
  rand = 10;
}

function draw() {
  if(focused){
noFill();
stroke(0);
strokeWeight(1);
rect(0,0, width-1, height-1);
translate(width*0.5, height*0.5);

if(begin == false){
  fill(0,0,0);
  textAlign(CENTER);
  textFont("Courier New", 32);
  text("CLICK TO BEGIN", 0, 0);
  if(mouseIsPressed && mouseButton == LEFT) {
    noStroke();
    fill(255);
    rect(-width/3, -height/3, width/1.5, height/1.5);
    begin = true;
  }
}

if(begin == true) {
    
  mouseX = constrain(mouseX, 1, width);
  mouseY = constrain(mouseY, 1, height);
  pmouseX = constrain(pmouseX, 1, width);
  pmouseY = constrain(pmouseY, 1, width);
  fill(255, 255, 255, 0);
  noStroke();
  rect(0, 0, width, height);
  if (keyIsPressed && (keyCode == BACKSPACE)) {
      elapsed = 1;
      background(255);
      noFill();
      stroke(0);
      strokeWeight(1);
      translate(-width/2,-height/2);
      rect(0,0, width-1, height-1);
      translate(width/2, height/2);
      pause = false;
  }
  if(pause == false) {
    for (i = 0; i < dataX.length; i++) {
      stroke(int(random(abs(mouseX +1))), int(random(abs(mouseY +1))), random(int(abs(mouseX +1)) % int(abs(mouseY +1))), map(random(255), 0, 255, 200, 255));
      strokeWeight(elapsed % (dataX.length * .008));
      randomSeed(rand);
      if(mouseIsPressed && (mouseButton == LEFT)) {
        rotate((abs(mouseX +1)) % (abs(mouseY +1)));
      }else{
        rotate((abs(mouseX +1) / abs(mouseY +1)) + elapsed);
      }
      if(mouseIsPressed && (mouseButton == CENTER)) {
      }
      else{
        if(vari == 1) {
          line(pmouseX + elapsed*.1, pmouseY + elapsed*.1, mouseX + elapsed*.1 + noise(elapsed, i), mouseY + elapsed*.1 + noise(i));}
      }
      if(vari == 2) {
        point(mouseX + elapsed*.1,mouseY + elapsed*.1);
      }
    }
    elapsed++;
  }
    
  if(keyIsPressed == true){ 
    if(keyCode == SHIFT){
        elapsed = 1;
    }
    if(keyCode == 49) {
      vari = 1;
    }
    if(keyCode == 50) {
      vari = 2;
    }
  }
 }
}
}
function keyPressed() {
  if(keyCode == 32) {
    if(pause == true){
      pause = false;
    }else{
      pause = true;
    }
  }
  if(keyCode == ENTER) {
    saveCanvas();
  }
  if(keyCode == 88) {
    rand = random(elapsed % 255);
  }
}

function keyReleased() {
  keyCode = 0;
}