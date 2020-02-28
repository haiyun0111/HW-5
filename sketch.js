var sound1;
var ballx = 470;
var bally = 390;
var waterLv1 = 0;
var waterLvY = 588;
var waterS = 10;
var ballx1= 180;
var bally1 = 580;
var ballx2 = 380;
var bally2 = 580;
var ballx3 = 240;
var bally3 = 580;
var ballx4 = 310;
var bally4 = 580;
var ballx5 = 200;
var bally5 = 590;
var ballx6 = 420;
var bally6 = 580;

function preload() {
  soundFormats("wav");
  sound1 = loadSound("2.wav");
}  

function setup() {
  createCanvas(600, 600);
}

function mouseReleased() {
  sound1.stop();
}


function draw() {
  background(255, 204, 0);

  stroke(0);
  strokeWeight(13)
  line(80, 300, 80, 590);  
  line(520, 300, 520, 590);
  line(80, 590, 520, 590);
  strokeWeight(20)
  noStroke()
  fill('#fae');
  rect(460, 350, 60,15);
  rect(460, 360, 20, 20);
  rect(490, 330, 10,20);
  fill('rgb(100%,0%,10%)');
  rect(480, 330,30,10);

  if (mouseIsPressed) {
    
    fill(color(0, 0, 255));
  ellipse(ballx, bally, 15);
  rect (85, waterLvY, 430, waterLv1);
    fill('rgb(100%,0%,10%)');
    rect(100, 50, 150, 70)
    fill(color(0, 0, 255));
  textSize(50);
  text('ON', 130, 100);
    fill('#fae');
    ellipse(ballx1, bally1, 18);
    bally1 = bally1-0.2
    ballx1 += random(-1, 1);
    bally1 += random(-1, 1);
    
    if (bally1 < 580 && !sound1.isPlaying()){
      
      sound1.play();
      console.log("sound played");
    }

    ellipse(ballx2, bally2, 14);
    ballx2 += random(-1, 1);
    bally2 += random(-1, 1);
    bally2 = bally2-0.2
    ellipse(ballx3, bally3, 15);
    ballx3 += random(-1, 1);
    bally3 += random(-1, 1);
    bally3 = bally3-0.2
    ellipse(ballx4, bally4, 13);
    ballx4 += random(-1, 1);
    bally4 += random(-1, 1);
    bally4 = bally4-0.2
    ellipse(ballx5, bally5, 12);
    ballx5 += random(-1, 1);
    bally5 += random(-1, 1);
    bally5 = bally5-0.2
    ellipse(ballx6, bally6, 12);
    ballx6 += random(-1, 1);
    bally6 += random(-1, 1);
    bally6 = bally6-0.2
    

    
  
  }else{
    
    fill(0, 102, 153);
    rect(100, 50, 150, 70)
    fill('rgb(100%,0%,10%)');
  textSize(50);
  text('OFF', 130, 100);
  }
  
  bally = bally + 3

  
  
  
  if (bally > waterLvY) {
    bally = 380;
    waterLvY = waterLvY -waterS;
    waterLv1 = waterLv1 +waterS;
    

  }
  
  
  if(waterLvY <bally){
    waterS =0;
    

  }
  
  

}
