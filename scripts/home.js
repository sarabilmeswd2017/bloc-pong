function Computer(){
  var pong_canvas = document.getElementById('canvas');
  var computer_paddle = pong_canvas.getContext("2d");
  computer_paddle.fillRect(5, 200, 40, 100);
  var speed = 0;
}


function Player(){
  var pong_canvas = document.getElementById('canvas');
  var player_paddle = pong_canvas.getContext("2d");
  player_paddle.fillRect(755, 200, 40, 100);
  var speed = 0;
}


function Ball(){
  var pong_canvas = document.getElementById('canvas');
  var ball = pong_canvas.getContext("2d");
  var centerX = pong_canvas.width / 2;
  var centerY = pong_canvas.height / 2;
  var radius = 20;

  ball.beginPath();
  ball.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

  ball.fill();

}


function Render(){
  Computer();
  Player();
  Ball();
}

function animate(){
var animate = window.requestAnimationFrame ||
              function(step) {window.setTimeout(step, 1000/60)};
}

function step(){
  animate();
  Render();
}
window.onload = function(){
  Render();
}
