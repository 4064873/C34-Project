var dog, happyDog, database, foodS, foodStock;
var dogIMG;

function preload()
{
dogIMG = loadImage("Dog.png")
happyDogIMG = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250,20,20)
  dog.addImage(dogIMG)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)) {
writeStock(foodS);
dog.addImage(happyDogIMG);
}
  drawSprites();
  //add styles here

  textSize(35)
  fill("white")
  text("Press Up Arrow To Feed Dogo",250,300)
}

function readStock(data) {
  foodS=data.val();
}
function writeStock(x) {
  if(x<=0){
    x=1;
  } else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
