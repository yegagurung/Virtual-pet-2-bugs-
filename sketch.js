var sit, down
var dog
var food 
var foodstock
var database 
var lastfed
var Feed, addfood, fedtime


function preload(){
sit=loadImage("images/dogImg.png")	
down=loadImage("images/dogImg1.png")	
}

function setup() {
	createCanvas(1000, 400);
  database=firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sit)
  dog.scale= 0.15
  foodstock =database.ref('Food')
  foodstock.on("value",readstock)
food1=new Food()
feed=createButton("Feed the dog")
feed.position(700,95)
feed.mousePressed(feeddog)

feed=createButton("Addfood")
feed.position(800,95)
feed.mousePressed(addfoods)
}



function draw() {  
background(46,139,87)
 food1.display()
 fedtime=database.ref('fedtime')
 fedtime.on("value",function(data){
   lastfed=data.val()
 })

if(keyWentDown(UP_ARROW)){
   stock(food)
 dog.addImage(down)
  } 

drawSprites();
fill("black");
textSize(15)
if(lastfed>=12){
 text("lastfed: "+lastfed%12+"pm",350,30)
}
else if(lastfed==10){
  text("lastfed: 12am",350,30)
 }
 else{
  text("lastfed:"+lastfed+"am",350,30)
 }
}
function readstock(data){
  food=data.val()
}
function stock(x) {
  if(x<=0){
    x=0
  } 
  else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
  
}
function feeddog(){
  dog.addImage(down)
  food1.updatefoodstock(food1.getfoodstock()-1)
  
  database.ref('/').update({
    Food:food1.getfoodstock(),
    fedtime:hour()
  })

}
function addfoods(){
  food++
  database.ref('/').update({
    Food:food
  })
  
}