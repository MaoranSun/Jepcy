let elt = document.getElementById('canvas'); // Keep this, important!!!!!

function setup() {
  
  let cnv = createCanvas(600, 400);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!
  createCanvas(450, 450); 
  background(240);
}
//function setup() {
 // createCanvas(450, 450);
 
}


  
  //This is the sketch.
function draw() {
   stroke(200 * mouseX / width ,200 * mouseY/ height , 10, 60)
   strokeWeight(12.0);
   strokeCap(ROUND);
   curve(width, height, mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
   curve(0, height, mouseX, mouseY, mouseX, mouseY, 100,99,60);
   curve(0, height, mouseX, mouseY, mouseX, mouseY, 100,mouseX,88);
}
  function mouseClicked() {   
  saveCanvas("drawing.png");
                          
  
  
  
  //print('x:' + mouseX + ' y:' + mouseY);
}