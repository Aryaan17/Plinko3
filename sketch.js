var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions = [];
var score = 0;
var turn = 0;
var gameState = "play";

var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  background("black");
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division (k, height-divisionHeight/2, 10, divisionHeight));
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
  textSize(20);
  //background("black");
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var x = 0; x<divisions.length; x++){
     divisions[x].display();
   }

   textSize(20);
   text("Score: " + score, 20, 20); 

   if(turn === 5){
     gameState = "end";
     textSize(30);
     fill("white");
     text("GAME OVER", 320, 225);
   }

   
  
}

function mousePressed(){
  if(gameState!== "end"){
    particles = new Particle(mouseX, 10, 10); 
    if(particles.body.position.y > 760){
      turn++;
      if(particles!= null){
        if(particles.body.position.x<300){
          score = score + 500;
        }
        else if(particles.x<600){
          score = score + 100;
        }
        else{
          score = score + 200;
        }
      }
      particles = null;
     }
  }
  particles.display();
}