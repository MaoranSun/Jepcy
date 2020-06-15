let elt = document.getElementById('canvas'); // Keep this, important!!!!!

function setup() {
  
  let cnv = createCanvas(600, 400);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!
  createCanvas(600, 400);
}
function setup() {
}

function draw() {
  background(224,255,255);

  push();//These are all color and properties of mountain.
  noStroke();
  fill(244,164,96);
 
//This is a mountain.
  bezier(0,132,10,11,132,94,172,123);
  bezier(127,96,279,40,279,40,443,137);
  bezier(394,111,502,66,502,66,600,125);
  pop(); //The mountian is done. 

//This is a river.
  push(); //These are all color and properties of river.
  noStroke();
  fill('PaleTurquoise');
 
  beginShape();
  vertex(0,162);
  vertex(168,141);
  vertex(468,164);
  vertex(600,162);
  vertex(600,202);
  vertex(488,264);
  vertex(0,202);
  endShape();
  pop();

  // These are some bubbles on the river.
  push();
  noFill();
  colorMode(RGB, 245, 245, 255, 1);
  
  strokeWeight(3);
  stroke(255, 0, 10, 0.3);
  circle(110,152,20);
  circle(155,188,30);
  circle(223,155,33);
  circle(340,157,50);
  pop();
  
//This is a sun.
  fill('Red'); 
  noStroke();
  circle(600,4,120);

//This a windmill.
  fill(128,128,0,300);
  triangle(517,194,598,397,446,398); 

  push();
  fill(218,112,214,200);
  triangle(493,67,531,113,516,193);
  triangle(401,222,466,185,517,195);
  triangle(516,193,566,211,589,282);
  triangle(578,99,589,140,520,191);
  pop();
  
//This is a grassland.
  fill('LawnGreen');
  beginShape();
  vertex(0,204);
  vertex(494,262);
  vertex(445,398);
  vertex(1,379);
  vertex(0,204);
  endShape();

//These are some stones.
  fill('DarkKhaki');
  ellipse(107,284,40,20);
  ellipse(140,290,40,20);
  ellipse(339,330,50,20);
  
  fill('PaleTurquoise');
  ellipse(255,250,50,90)
  ellipse(304,259,100,50);
  
}