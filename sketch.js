let tamaño = {
  width: 0,
  height:0,
  escala:0,
}
let img;
let fondo;


function responsive(tamaño){
  tamaño.width = window.screen.width;
  tamaño.height = window.screen.height;
  if (Math.min(tamaño.width, tamaño.height) >= 768) {
    tamaño.escala = (tamaño.height/28);
    tamaño.width = tamaño.width/2;
    tamaño.height = tamaño.height-170;
  
}else{
  tamaño.escala = (tamaño.height/24);
}
}

function setup() {
  responsive(tamaño);
  
  let cnv =createCanvas(tamaño.width, tamaño.height);
  fondo = color(50,50,50,50);
  if (Math.min(tamaño.width, tamaño.height) >= 628) {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  
}

  figura = new Ficha(0,tamaño.escala);
  tablero = new Tablero(tamaño.escala,20,10);
}

function draw() {
  
  //figura.forma = figuras.t
 
  tablero.dibujar();
  figura.dibujar();
  background(fondo);
  tablero.dibujar_marco();

  //dinamicas
  //figura.dinamicas();
  dinamicas();
  
 
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

function windowResized() {
  responsive(tamaño);
  resizeCanvas(windowWidth, windowHeight);
}


function preload(){
  img = loadImage('img/texture2.jpg');
 
}

function tema(tema){
  img = loadImage('img/texture'+tema+'.jpg');
  switch (tema) {
    case 1:
      fondo = color(250,250,50,50);
      break;

    case 2:
      fondo = color(50,50,50,50);
      break;


    case 3:
      fondo = color(50,50,250,50);
      break;
    default:
      break;
  }
}