const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 45);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stars);
  layer1.mode( SWIRL(9) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(eventhorizon);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(blackhole)
  layer3.mode(RING);
  layer3.set_boundary (200, 1000);

  var layer4 = new PLayer(starship)
  layer4.mode (RING);
  layer4.set_boundary (800, 1000)
}



function stars(x, y, animation, pScope){ // This will become the Stars
  
  scale(animation.frame*2);

  
  translate(width * 0.8, height * 0.5);
  star(0, 0, 30, 70, 5);


}

function star(x, y, radius1, radius2, npoints) { // This function set of code for the star to be made was found on the P5JS site for Stars
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    stroke(200)
  }
  endShape(CLOSE);
}

function eventhorizon(x, y, animation, pScope){ // This will become the event horizon piece

  //this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(252, 130, 0)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

}

function blackhole(x, y, animation, pscope){ // Blackhole itself as well as the starship (going to be designed off of NASA Space Shuttle)

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(1)
  arc(x,y,700,700,backgroundArcStart,backgroundArcEnd);

}
function starship(x, y, animation, pscope){
  scale(animation.frame+1);

  rect(400,700,50,20) //x,y,w,h
  triangle(440,710,460,700,460,720) // Engine Exhaust
  triangle(400,700,400,720,370,700) //x1,y1,x2,y2,x3,y3 Nose cone
  triangle(450,720,430,720,450,740) // Tail wing
}