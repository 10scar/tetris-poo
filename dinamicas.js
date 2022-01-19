function dinamicas(){

    //casos de juego, 0,iniciar tuttorial, 1 juego, 2 pausa, 3 game over
    switch (tablero.estado) {
        case 0:
            
            break;

        case 1:
            juego();
            break;
        case 2:
            
            break;
    
        case 3:
            
            break;

        default:
            break;
    }

    
}


function juego(){
    if(tablero.frames == 60){
        tablero.frames = 0;
     
        //verificar colisiones al mover hacia abajo
        if(figura.mover(0,+1))
        {
            //actualiza el tablero segun la ficha o verifica el game over
            if(figura.verificar(1))
            {

                console.log('gamer over');
            }else{
                //el objeto colisiono y se regenera
                figura.vida = 0;
            };
            
            //verifica la vida de la ficha
            figura.reiniciar();
            //verifica si se hace una linea despues de cada colision final.
            tablero.verificar();
        }
        
    }
    tablero.frames++;
}

function inicio(){
    
} 