
var myGamePiece;
var myObstacles = [];
var myScore;
var rot = 0;


function startGame() {
    // myGamePiece1 = new component(80, 10, "rgb(20,40,70)", 10, 20);
    myGamePiece = new component(40, 10, "rgb(20,40,70)", 120, 120);
    myGameArea.start();

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {

        this.canvas.width = $("body").outerWidth();
        this.canvas.height = $("body").outerHeight();

        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function () {
      this.context.fillStyle = "rgba(120,120,120,0.9)";
      this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
      // this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

}

function component(width, height, color, x, y){
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.rot = 0;
  this.x = x;
  this.y = y;

  this.update = function(){

    ctx = myGameArea.context;
    ctx.fillStyle = color;
    // contex.translate(this.width/2, this.height/2);
    // ctx.translate(0,0);

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(rot*Math.PI/180);
    ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
    ctx.restore();
    // ctx.translate(-this.width/2, -this.height/2);
    // ctx.rotate(-this.rot-rot*Math.PI/180);




    }

  this.newPos = function(){
    this.x += this.speedX;
    this.y += this.speedY;
    // this.rot = rot;
  }



}


function updateGameArea(){


  myGameArea.clear();

  myGamePiece.newPos();
  myGamePiece.update();

}

function moveup(){
  myGamePiece.speedY -= 1;
}

function movedown(){
  myGamePiece.speedY += 1;
}

function moveleft(){
  myGamePiece.speedX -= 1;
}

function moveright(){
  myGamePiece.speedX += 1;
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
//
// function updaterot(){
//   myGamePiece.rot += 1;
// }

function updateGameHeading(heading){
   rot = heading;
   console.log(heading);
  // updateRot();
   // myGamePiece.rot += 1;
    // heading;
   // console.log(heading)
}
