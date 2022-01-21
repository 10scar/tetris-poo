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
    if(tablero.estado=3){
        intro.stop();
        tablero.restablecer();
    }
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
    //solo para debug
/*       case 87:
          figura.mover(0,-1);
          break; */
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