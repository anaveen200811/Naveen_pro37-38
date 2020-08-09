var canvas, backgroundImage,trackImg,car1Img,car2Img,car3Img,car4Img,groundImg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload() {
  trackImg = loadImage("images/track.jpg");
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  
  groundImg = loadImage("images/ground.png");
  
  }
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //background("#c68767");
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2) {
    game.end();
  }
}
