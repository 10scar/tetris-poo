function setup() {
  createCanvas(1000, 1000);
  figura = new Ficha(0,70);
  tablero = new Tablero(70,20,10);
  //console.log('casillas '+tablero.casillas.length);
  
}

function draw() {
  background(220);
  figura.forma = figuras.t
  tablero.dibujar();
  figura.dibujar();
 
}

///teclas
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      figura.rotar();
      figura.rotar();
      figura.rotar();
      break;
    case RIGHT_ARROW:
     figura.rotar();
      //x += 5;
      break;
    case UP_ARROW:
     // y -= 5;
      break;
    case DOWN_ARROW:
    //  y += 5;
      break;
  
    case 87:
        figura.mover(0,-1);
        break;
    case 83:
        figura.mover(0,1);
        break;
    case 65:
        figura.mover(-1,0);
        break;
    case 68:
        figura.mover(1,0);
        break;
  }

}
