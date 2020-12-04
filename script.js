function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 30;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function (){
    this.left -= 30;
  }
  this.moveDown = function (){
    this.top += 30;
  }
  this.moveUp = function () {
    this.top -= 30;
  }


}
 let hero = new Hero('psyduck.jpg', 20, 30, 200);

function startRight(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(startRight, 300);
}

startRight();
function startDown(){
  if ( hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(startDown, 300);
}
startDown();