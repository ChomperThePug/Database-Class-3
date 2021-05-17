var database;
var backgroundImage;
var gameState = 0;
var playerCount, canvas;
var game, form, player;
var allPlayers;

function setup() {
  database = firebase.database();
  canvas = createCanvas(500, 500);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
}