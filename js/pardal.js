let boques=['👅','👄','🫦']
//let p1,ps;
let p=[];
function setup() {
  createCanvas(displayWidth, displayHeight);
  for(let i=0; i<30; i++){
    p[i]=new Pardal(200, random(100),ceil(random(-1,2)));
  }
  //p1= new Pardal(width,100,floor(random(-1,2)));
}

function draw() {
  background('#B7F9F2');
  for(let i=0; i<p.length; i++){
    p[i].show();
    p[i].move();
  }
  //p1.show();
  //p1.move();
}

class Pardal{
  constructor(x,y,rb){
    this.x=x;
    this.y=y
    this.rab=rb;
  }
    move(){
    this.x=this.x-1;
      if(this.x<-250){
        this.x=width
      }
  }
 show(){
   strokeWeight(2);
   scale(0.6);
   translate(this.x,10);
   push();
   fill('#FF9D45');
  triangle(0,200,100,200,100,150);
  ellipseMode(CORNER);
   fill('#FFED43');
  ellipse(100,140,150,75);
   textSize(40);
   text('👀',140,160);
   text(boques[this.rab],140,200);
   pop();
 } 

}