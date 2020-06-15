let elt = document.getElementById('canvas'); // Keep this, important!!!!!

function setup() {
  
  let cnv = createCanvas(600, 400);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!
  createCanvas(600, 400);
  noStroke();
}
  //only once
let centerX=200;
let centerY =300;
let speedX=2.5;
let speedY=1.2;

 function setup() {
  //createCanvas(600, 400);
  //noStroke();
  
   //centerX= width/2;
   //centerY= height/2;
  
}

function draw() {
  //background(220);

  //draw the shape
   triangle(centerX, centerY,100, 90, 70, 101);
   fill(200 * centerX / width ,200 * centerY/ height ,10, 40)
   
  
  //update its position
  centerX = centerX+speedX;
  centerY = centerY+speedY;

  //it's velocity
  if(centerX > 600 || centerX < 0) {
    speedX = -speedX
  }
  if(centerY > 400 || centerY < 0) {
    speedY = -speedY
  }
  
  
    
    
  
  
  
  
  
  //print(centerX);
}
