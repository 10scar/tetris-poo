let intro;
let control_musica;
let tamaño = {
  width: 0,
  height:0,
  escala:0,
}
let boton_pausa;
let img, ajustes, iniciar, pausa; 
let config, tutorial_asd,tutorial_espacio;
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

  //loadrecursos();
  
  responsive(tamaño);
  
  let cnv =createCanvas(tamaño.width, tamaño.height);
  fondo = color(50,50,50,50);
  if (Math.min(tamaño.width, tamaño.height) >= 628) {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  
}
  //control_musica = createSlider(0, 1, 0.2, 0.2);
  //control_musica.position(20,20);
 
  figura = new Ficha(0,tamaño.escala);
  tablero = new Tablero(tamaño.escala,20,10);
  botones();

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



