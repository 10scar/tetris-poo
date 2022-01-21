function dinamicas(){
    config.draw();
    //casos de juego, 0,iniciar tuttorial, 1 juego, 2 pausa, 3 game over
    switch (tablero.estado) {
        case 0:
            inicio();
            break;

        case 1:
            juego();
            break;
        case 2:
            boton_pausa.draw();
            break;
    
        case 3:
            
            break;

        default:
            break;
    }

    
}


function juego(){
    boton_pausa.draw();
    if(tablero.frames == 60){
        tablero.frames = 0;
     
        //verificar colisiones al mover hacia abajo
        if(!figura.mover(0,+1))
        {
            //actualiza el tablero segun la ficha o verifica el game over
            if(!tablero.verificar_colisiones(1))
            {

                console.log('gamer over');
            }else{
                //el objeto colisiono y se regenera
                figura.vida = 0;
            };
            
            //verifica la vida de la ficha
            figura.reiniciar();
            //verifica si se hace una linea despues de cada colision final.
            tablero.verificar_lineas();
        }
        
    }
    tablero.frames++;
}

function inicio(){
    //verifica musica
    intro.setVolume(tablero.volumen);
    if(!intro.isPlaying()){
      console.log('hola');
      intro.play();
      
    }

    //dibuja botones
    //jugar.draw();
    jugar.draw();

    image(tutorial_asd,14*tablero.escala,5*tablero.escala,7*tablero.escala,4*tablero.escala);
    image(tutorial_espacio,13*tablero.escala,10*tablero.escala,9*tablero.escala,5*tablero.escala);
    if(frameCount %60 == 0){
      figura.vida = 0;
      figura.reiniciar();
      //figura.escala =tablero.escala*2;
      figura.x = 4*tablero.escala;
      figura.y = 14*tablero.escala;
    }

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
      case 32:
          tablero.nitro();
          break;
    }
  
  }


  function windowResized() {
    responsive(tamaño);
    resizeCanvas(windowWidth, windowHeight);
  }
  
  //carga musica e imagenes
  function preload(){
    img = loadImage('img/texture2.jpg');
    ininicar = loadImage('img/intro.gif');
    tutorial_asd = loadImage('img/asd.gif');
    tutorial_espacio = loadImage('img/espacio.gif');
    ajustes = loadImage('img/ajustes.png');
    pausa = loadImage('img/pausa.png');
    intro = loadSound('sound/intro.mp3');
   
  }
  
  function touchStarted() {
    getAudioContext().resume();
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

function botones(){
  //Create, style and resize clickables.
jugar = new Clickable();
jugar.locate(4*tablero.escala, 4*tablero.escala);
jugar.resize(4*tablero.escala, 2*tablero.escala);
jugar.text ="JUGAR";
//This function is ran when the clickable is hovered but not pressed.
jugar.onHover = function () {
  this.color = "#114DC4";
}
//This function is ran when the clickable is NOT hovered.
jugar.onOutside = function () {
  this.color = "#1DB2A9";
  this.textColor = "#FFFFFF";
}
//This function is ran when the clickable is pressed.
jugar.onPress = function () {
  figura.vida = 0;
  figura.escala =tablero.escala;
  figura.x = 4*tablero.escala;
  figura.y=0*tablero.escala;
  tablero.estado = 1;
  //$('#exampleModal').modal('show');
}



// image will stretch to fill button by default
jugar = new Clickable();
jugar.image = ininicar;
jugar.imageScale = 1;
jugar.text = "";
jugar.color = "0";
jugar.locate(2*tablero.escala, 4*tablero.escala);
jugar.resize(8*tablero.escala, 8*tablero.escala);
jugar.onHover = function () {
  jugar.imageScale = 1.1;
}
jugar.onOutside = function () {
  jugar.imageScale = 1;
}

jugar.onPress = function () {
  intro.stop();
  figura.vida = 0;
  figura.x = 4*tablero.escala;
  figura.y=0*tablero.escala;
  tablero.estado = 1;
  //$('#exampleModal').modal('show');
}


// image will stretch to fill button by default
config = new Clickable();
config.image = ajustes;
config.imageScale = 1;
config.text = "";
config.color = "#ffffff";
config.locate(13*tablero.escala, 20*tablero.escala);
config.resize(1.5*tablero.escala, 1.5*tablero.escala);
config.onHover = function () {
  config.imageScale = 1.1;
}
config.onOutside = function () {
  config.imageScale = 1;
}

config.onPress = function () {
  if(tablero.estado == 1){
    tablero.estado =2;
  }
  $('#exampleModal').modal('show');
}

boton_pausa = new Clickable();
boton_pausa.image = pausa;
boton_pausa.imageScale = 1;
boton_pausa.text = "";
boton_pausa.color = "#ffffff";
boton_pausa.locate(15*tablero.escala, 20*tablero.escala);
boton_pausa.resize(1.5*tablero.escala, 1.5*tablero.escala);
boton_pausa.onHover = function () {
  boton_pausa.imageScale = 1.1;
}
boton_pausa.onOutside = function () {
  boton_pausa.imageScale = 1;
}

boton_pausa.onPress = function () {
  if(tablero.estado == 2){
    tablero.estado = 1;
  }else {
    tablero.estado = 2;
  }
 
}

}
  
function range(x){
  x = parseFloat(x);
  console.log(x);
  tablero.volumen = x;
}





