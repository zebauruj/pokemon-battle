var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("image/w1.jpg");
  player1_img = loadImage("image/p1.gif");
  player2_img = loadAnimation("image/po1.png","image/po2.png","image/po3.png","image/po4.png","image/po5.png","image/po6.png","image/po7.png","image/po8.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  arena=loadImage("image/battle1.png");
  
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  fruitGroup = new Group();
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}