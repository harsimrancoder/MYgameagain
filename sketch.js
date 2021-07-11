const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var score=0
var bg,bg2,form,system,code,security;

var bg,textbox;
var bgimg;
var canvas;
var girl,sleeping;
var gameState = 0
var bubbleimg
var girl2,girlimg;
var tunnel,tunnleimg
var walking,walkingimg
var house,houseimg
var girlshock,shockedimg
var inside1,inside1img
var inside2,inside2img
var shockedgirl,girl2img
var shadow,shadowimg
var inside3,inside3img
var door,dooring;
var door2,door321img

function preload(){

bgimage= loadAnimation("images/img1.gif","images/img2.gif","images/img3.gif","images/img4.gif","images/img5.gif","images/img6.gif","images/img7.gif","images/img8.gif","images/img9.gif","images/img10.gif","images/img11.gif","images/img12.gif","images/img13.gif","images/img14.gif")
sleeping=loadImage("images/sleeping.gif")
bubbleimg=loadImage("images/bubble.png")
girlimg=loadImage("images/girl.jpg")
tunnelimg=loadImage("images/room.jpg")
walkingimg = loadAnimation("images/1.gif","images/2.gif","images/3.gif","images/4.gif","images/5.gif","images/4.gif","images/3.gif","images/2.gif","images/1.gif")
houseimg=loadImage("images/house.jpg")
shockedimg=loadImage("images/shocked girl.png")
inside1img=loadImage("images/inside1.jpg")
inside2img=loadImage("images/inside2.jpg")
girl2img=loadImage("images/shocked 2.jpg")
shadowimg=loadImage("images/shadow1.jpg")
inside3img=loadImage("images/inside3.jpg")
doorimg=loadImage("images/door.jpg")
door321img=loadImage("images/door 321.jpg")
bg2=loadImage("images/opendoor.jpg")

}
function setup(){
    canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;
    system = new System()
    security = new Security()
    
    bg=createSprite(500,275)
    bg.addAnimation("a",bgimage)
    bg.scale = 2;
    bg.visible = true;

    textbox = createSprite(500,500,700,80)
    textbox.shapeColor = "black";
    textbox.visible = true;

    girl = createSprite(500,275);
    girl.addImage(sleeping);
    girl.visible = false;
    girl.scale=4.5;

    textbox1 = createSprite(650,100,630,90)
    textbox1.shapeColor = "black";
    textbox1.visible = false;

    girl2 = createSprite(500,275);
    girl2.addImage(girlimg);
    girl2.visible = false;
    girl2.scale=0.5;

    textbox2 = createSprite(650,500,670,90)
    textbox2.shapeColor = "black";
    textbox2.visible = false;

    tunnel=createSprite(500,275,)
    tunnel.addImage(tunnelimg);
    tunnel.visible=false;
    tunnel.scale=3
   
    textbox3 = createSprite(650,100,600,90)
    textbox3.shapeColor = "black";
    textbox3.visible = false;

    
    walking=createSprite(999,275)
    walking.addAnimation("walk",walkingimg)
    walking.visible = false
    walking.scale = 0.6
    walking.velocityX = -2.5;
   
    textbox4 = createSprite(650,100,600,90)
    textbox4.shapeColor = "black";
    textbox4.visible = false;

    house = createSprite(500,275);
    house.addImage(houseimg);
    house.visible = false;
    house.scale = 4.5;
   
    girlshock = createSprite(200,375);
    girlshock.addImage(shockedimg);
    girlshock.visible = false;

    textbox5 = createSprite(600,500,700,90)
    textbox5.shapeColor = "white";
    textbox5.visible = false;

    inside1=createSprite(500,200,100,90)
    inside1.addImage(inside1img);
    inside1.visible=false;
    inside1.scale = 3.5;
    textbox6 = createSprite(600,500,700,90)
    textbox6.shapeColor = "white";
    textbox6.visible = false;
    
    inside2=createSprite(500,170,100,90)
    inside2.addImage(inside2img);
    inside2.visible=false;
    inside2.scale = 1.5;
    textbox7 = createSprite(600,500,700,90)
    textbox7.shapeColor = "white";
    textbox7.visible = false;

    inside3=createSprite(500,170,100,90)
    inside3.addImage(inside3img);
    inside3.visible=false;
    inside3.scale = 1.5;
    textbox8 = createSprite(600,500,700,90)
    textbox8.shapeColor = "white";
    textbox8.visible = false;

    shadow=createSprite(500,170,200,90)
    shadow.addImage(shadowimg);
    shadow.visible=false;
    shadow.scale = 1;

    shockedgirl=createSprite(205,255)
    shockedgirl.addImage(girl2img);
    shockedgirl.visible=false;
   shockedgirl.scale = 0.5;
    textbox9 = createSprite(600,500,700,90)
    textbox9.shapeColor = "white";
    textbox9.visible = false;

   

    door=createSprite(305,255,90,90)
    door.addImage(doorimg);
    door.visible=false;
   door.scale = 3.5;
    textbox10 = createSprite(600,500,700,90)
    textbox10.shapeColor = "white";
    textbox10.visible = false;
    
    door2=createSprite(500,255,90,90)
    door2.addImage(door321img);
    door2.visible=false;
   door2.scale = 3.5;
   //girlshock.scale = 0.5;
    // bubble = createSprite(500,275);
    // bubble.addImage(bubbleimg);
    // bubble.visible = false;
    // bubble.scale=1;   
}

function draw(){
   if(gameState ===0){
    background(0);
    drawSprites();
    security.hide();
    //clear();
    textSize(15)
    fill("white");
    text("Today is a rainy day and the sky is dark.The clouds seems very heavy and  the wind is strong.",200,490)
    text("This is the first time raining this HARD in this area as i recently shiffted here. ",200,510)
    textSize(16)
    fill("red");
    text("Press S to continue",669,527)

    if(keyDown("S")){
        gameState = 1;
    }

}

    if(gameState === 1){
        background(0);
        bg.visible = false;
        textbox.visible = false;
        girl.visible = true;
        textbox1.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("I usually like this kind of weather, but today I can not enjoy the weather because.. ",360,80)
    text("i am working on my company spy mission.I don't know how but I unfortunatly felt ASLEEP...",360,100)    
    textSize(16);
    fill("red");
    text("Press E to continue",800,130)

    if(keyDown("E")){
        gameState = 2;
    }
    }
    if(gameState === 2){
        background(0);
        girl.visible = false;
        textbox1.visible = false;
        girl2.visible = true;
        textbox2.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("OH SORRY, I am Hana. I am working in sy agency.This company mostly work on spy missions. ",325,480)
    text("this time we have to find a secret paper and i am the incharge this time  ",325,500)    
    textSize(16);
    fill("red");
    text("Press A to continue",800,530)

    if(keyDown("A")){
        gameState = 3;
    }
    }
    if(gameState === 3){
        background(0);
        girl2.visible = false;
        textbox2.visible = false;
        tunnel.visible = true;
        walking.visible = true;
        textbox3.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("OHH.. I automatically felt like I was walking in a dark tunnle. ",360,80)
    text("I still kept walking even though I don't want to..   when I reached the end ...",360,100)    
    textSize(16);
    fill("red");
   

    if(walking.x <-10){
        gameState = 4;
    }
    
}
if(gameState ===4){
    background(0);
    drawSprites();
    girl2.visible = false;
    textbox2.visible = false;
    tunnel.visible = false;
    walking.visible = false;
    textbox3.visible = false;
    textbox5.visible = true;
    house.visible = true;
    girlshock.visible =  true;

    
    textSize(15)
    fill("black");
    text("I saw a black big house.it had some lights on and some dim,everywhere was dark.the sky",255,500)
    text("was filled with darkness. I want to run but I could not move...",255,515)
    textSize(16)
    fill("red");
    text("Press W to continue",669,530)

    if(keyDown("W")){
        gameState = 5;
    }

 
}

if(gameState ===5){
    background(0);
    drawSprites();
    textbox5.visible = false;
    house.visible = false;
    inside1.visible=true;
    girlshock.visible = true ;
    textbox6.visible = true;
   
    
    textSize(15)
    fill("black");
    text("I started walking inside and kept walking,every where was dark and dusty",255,500)
    text("I was lost somewhere...I want to leave this place as fast as posible.",255,515)
    textSize(16)
    fill("red");
    text("Press R to continue",669,530)

    if(keyDown("R")){
        gameState = 6;
    }
}
    if(gameState ===6){
        background(0);
        drawSprites();
        textbox6.visible = false;
        inside1.visible = false;
        girlshock.visible = true ;
        inside2.visible=true;
       textbox7.visible = true;
       
        
        textSize(15)
        fill("black");
        text("I kept going inside and inside without knowing where to go. ",255,500)
        text("I was still in shocked situation and wanted to cry....",255,515)
        textSize(16)
        fill("red");
        text("Press Q to continue",669,530)
    
        if(keyDown("Q")){
            gameState = 7;
        }
    
}
if(gameState ===7){
    background(0);
    drawSprites();
    textbox6.visible = false;
    inside1.visible = false;
   
    inside2.visible=false;
    inside3.visible=true;
    girlshock.visible = true ;
    textbox8.visible = true;
    
  
    
    textSize(15)
    fill("black");
    text("I kept going inside and inside without knowing  ",255,500)
    text("I was still in shocked situation and saw....",255,515)
    textSize(16)
    fill("red");
    text("Press Z to continue",669,530)

    if(keyDown("Z")){
        gameState = 8;
    }

}
if(gameState ===8){
    background(0);
    drawSprites();
    textbox6.visible = false;
    inside3.visible = false;
    girlshock.visible = false ;
    
    shockedgirl.visible=true;
   textbox9.visible = true;
   shadow.visible=true;
   
    
    textSize(15)
    fill("black");
    text("I saw a shodow of a person standing  ",255,500)
    text("I was so scared that I froze where I was...I wanted to shout for help.. no voice came out of my mouth",255,515)
    textSize(16)
    fill("red");
    text("Press T to continue",669,530)

    if(keyDown("T")){
        gameState = 9;
    }
}
if(gameState ===9){
    background(0);
    drawSprites();
    textbox6.visible = false;
    inside3.visible = false;
    girlshock.visible = false ;
    
    shockedgirl.visible=false;
   textbox9.visible = false;
   shadow.visible=false;
door.visible= true;
   textbox10.visible=true;
   
   
    textSize(15)
    fill("black");
    text("I run as fast as possible and reached to a door and it as lock.  ",255,500)
    text("I felt like the shadow was coming closer,now you can only help me to OPEN THE DOOR..",255,515)
    textSize(16)
    fill("red");
    text("click on the door nob",669,530)

    if(mousePressedOver(door)){
        gameState = 10;
    }
}
if(gameState ===10){
    background(0);
    
    drawSprites();
    textbox6.visible = false;
    textbox5.visible = false;
    textbox7.visible = false;
    textbox8.visible = false;
    inside3.visible = false;
    girlshock.visible = false ;
    
    shockedgirl.visible=false;
   textbox9.visible = false;
   shadow.visible=false;
door.visible= false;
   textbox10.visible=false;
   door2.visible=true;
   
   clues();
   security.display();
 textSize(20)
 fill("white")
 text("Score: "+score,450,50)
 if(score===3){
    clear()
  background(bg2)
  
  }
}
}
