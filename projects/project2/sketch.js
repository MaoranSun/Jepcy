let elt = document.getElementById('canvas'); // Keep this, important!!!!!

function setup() {
  
  let cnv = createCanvas(600, 400);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!
  createCanvas(400, 400);
}
function setup() {
  
}

function draw() {
  background(200);

//This is my face.
  circle(180,100,50);

  //This is one of the glasses. 
  rect(177,124,5,100);

//This is Jepcy's body.
  let c;
  c = color('hsl(160, 180%, 50%)');
  fill(c); // Use 'c' as fill color

  //This is one of the glasses.
  square(165, 93, 13);
//These are my two arms.
  line  (177,165,133,124);
  line  (181,155,214,124);
// This is a sharp stick.
  triangle(180, 175, 58, 20, 86, 75);
// These are two of my legs.
  ellipse(175, 260, 8, 85);
  ellipse(185, 260, 8, 85);
  noFill ();
  stroke(355, 102, 10);
  stroke(2, 2, 2);
// This is a curve.
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
  fill('#fae');
  rect(177,124,5,100);
  
  

  
}