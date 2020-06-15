let elt = document.getElementById('canvas'); // Keep this, important!!!!!

function setup() {
  
  let cnv = createCanvas(600, 400);          // Keep this, important!!!!! Change the size if needed
  cnv.parent(elt)                            // Keep this, important!!!!!
  cnv.style('position', 'relative');          // Keep this, important!!!!!
  cnv.style('display', 'block');              // Keep this, important!!!!!
  cnv.style('margin-left', 'auto');           // Keep this, important!!!!!
  cnv.style('margin-right', 'auto');          // Keep this, important!!!!!
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(210);
  
  //Save all color and proerties.
    push();
    strokeWeight(3);
    stroke('tomato');
    
  //My last name.
    beginShape();
    vertex(102,94);
    vertex(118,110);
    endShape();
    line(86,123,86,187);
    beginShape();
    vertex(137,122);
    vertex(158,122);
    endShape();
    line(158,122,158,190);
    line(158,190,147,182);
    line(110,142,130,142);
    line(112,154,128,154);
    line(104,170,138,170);
    pop();//restore all changes on the last name.
  
  //My first name.
  //Save all color and proerties.
    push();
    strokeWeight(3);
    stroke('#00FFFF');
  
    line(205,227,210,240);
    line(184,254,240,254);
    bezier(183,254,183,254,183,292,178,330);
    line(200,288,235,288);
    bezier(214,267,214,267,217,288,204,323);
    line(215,291,235,325);
    pop();//restore all changes on the first name.
    
  }   
   
    
  
  
  
  
  
  
}