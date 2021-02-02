var fr;
var mr;
var r1;
var r2;



function setup() {
  createCanvas(800,1200);

fr = createSprite(200, 400, 50, 80)
fr.shapeColor = "red";

mr = createSprite(400, 400, 80, 30);
mr.shapeColor = "red";
fr.velocityX = +2;
mr.velocityX = -2;
 
r1 = createSprite(500, 100, 50, 50);
r1.velocityY = +2;


r2 = createSprite(500, 500, 70, 70);
r2.velocityY = -2;


}

function draw() {
  background("yellow"); 
  //mr.x = World.mouseX;
  //mr.y = World.mouseY;

//if(mr.x - fr.x < fr.width/2 + mr.width/2 && 
  //fr.x - mr.x < fr.width/2 + mr.width/2 && fr.y - mr.y < fr.height/2 + mr.height/2 && mr.y - fr.y < fr.height/2 + mr.height/2 ) {
  //mr.shapeColor = "green";
  //fr.shapeColor = "green";
//}
 //else{
   //mr.shapeColor = "red";
   //fr.shapeColor = "red";
 //}

 if(mr.x - fr.x < fr.width/2 + mr.width/2 && fr.x - mr.x < fr.width/2 + mr.width/2) {
   fr.velocityX = fr.velocityX * -1;
   mr.velocityX = mr.velocityX * -1;
}

if(r1.y - r2.y < r1.height/2 + r2.height/2 && r2.y - r1.y < r1.height/2 + r2.height/2) {
  r1.velocityY = r1.velocityY * -1;
  r2.velocityY = r2.velocityY * -1;
}

  drawSprites();
}