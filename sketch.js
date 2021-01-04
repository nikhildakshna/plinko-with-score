const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;

var PLAY = 0;
var END = 1;
var gamestate = PLAY;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   

    
}
 


function draw() {
   //console.log(count,mouseY,mouseX);
   console.log(score);
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
   //  particles.push(new particle(random(width/2-30, width/2+30), 10,10));
   //  score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 /*  for(var n = 0; n < particles.length; n++){
      
      particles[n].display();
   }
*/
   //making limit
   if(count === 5 && gamestate!==END){
      gamestate = END;
   }

  //specific_score();
}

function mousePressed(){
if(gamestate!==END){
particle = new Particle(mouseX, 10, 10);
count++;


particles.push(particle);

}
}

function specific_score(){
if(particles!=null){
particle.display();
if(particle.body.position.y > 450){

var pos = particle.body.position;

if(pos.x < 325){
score += 250;
}

else if(pos.x < 485){
score += 750
}

else{
score += 250
}

}
}
}