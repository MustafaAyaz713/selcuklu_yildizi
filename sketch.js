function setup() {
createCanvas(800, 800);
}
let kenar =0;
let rot = 0;

let x=-150;
let y=-30;
function draw() {
  background(500);
  
  angleMode(DEGREES);
  noFill();
  translate(300,300);
  let selcuk = new Selcuklu();
  let area = new Area();
  
  area.ciz()
  selcuk.play();
  
}
class Selcuklu{
  ciz(){
    circle(-0,-0,60)
    rect(-20,-20,40,40);
    rotate(45);
    rect(-20,-20,40,40);
  }
  dondur(){
    rotate(rot);
    rot+=5;
  }
  checkKenar(){
    if(x==-180 && y==-30){
      kenar=0;
    }
    else if(x==280 && y==-30){
      kenar=1;
    }else if(x==280 && y==330){
      kenar=2;
    }else if(x==20 && y==330){
      kenar=3;
    }
    else if(x==20 && y==180){
      kenar=4;
    }
    else if(x==-180 && y==180){
      kenar=5;
    }
  }
  move(){
    if(kenar==0){
      translate(x,y);
     x+=2;
    }
     if(kenar==1){
      translate(x,y);
     y+=2
    }
     if(kenar==2){
      translate(x,y);
     x-=2;
    }
    if(kenar==3){
      translate(x,y);
     y-=2;
    }
    if(kenar==4){
      translate(x,y);
     x-=2;
    }
    if(kenar==5){
      translate(x,y);
     y-=2;
    }
  }
  
  play(){
    this.checkKenar();    this.move();
    this.dondur();
    this.ciz();
  }

}

class Area{
  ciz(){
  beginShape();
  vertex(-150 ,0);
  vertex(250,0);
  vertex(250,300);
  vertex(50,300);
  vertex(50, 150);
  vertex(-150, 150);
  vertex(-150, 0);
  endShape(CLOSE);
  }
}