class Tablero{
    constructor(escala= 100,dimy =20 ,dimx=10){
        this.escala = escala;
        this.frames = 0;
        this.casillas = this.array2d(dimy,dimx, '#FFFFFF');
        this.estado = 0;
    

    }

    dibujar(){
        //console.log(this.casillas);
        for (let i=0;i<this.casillas.length;i++)
        {
            for(let x=0; x<this.casillas[i].length;x++)
            {
               
                fill(this.casillas[i][x])
                rect((this.escala*x)+this.escala,(this.escala*i)+this.escala,this.escala);
            }
        }
       
    }

    dibujar_marco(){
        let ancho = this.casillas[0].length;
        let alto = this.casillas.length;
        
        for(let i = 0;i<ancho+2;i++){
        
            image(img,i*this.escala,0,this.escala,this.escala);
        }
        for(let i = 0;i<ancho+2;i++){
            image(img,i*this.escala,(alto+1)*this.escala,this.escala,this.escala);
        }

        for(let i = 0;i<alto+2;i++){
            image(img,0,i*this.escala,this.escala,this.escala);
        }

        for(let i = 0;i<alto+2;i++){
            image(img,0,i*this.escala,this.escala,this.escala);
        }

        for(let i = 0;i<alto+2;i++){
            image(img,(ancho+1)*this.escala,i*this.escala,this.escala,this.escala);
        }

        }

    array2d(y,x,z){
        let arr = new Array(y);
        for(let i = 0; i< arr.length;i++){
            arr[i] = new Array(x).fill(z);
        }
        return arr
    }

    verificar_lineas(){
        let flag;
        for(let i = 0;i< this.casillas.length; i++)
        {
            flag =true;
            for (let m = 0;m< this.casillas.length;m++)
            {
                if(this.casillas[i][m] == '#FFFFFF')
                {
                    flag = false;
                    break;
                }
            }
        if(flag)
        {
            this.casillas.splice(i,1);
            this.casillas.unshift(new Array(this.casillas[0].length).fill('#FFFFFF'));
        }
        }
    }


    verificar_colisiones(x=0){
        let fig = figura.forma[figura.rotacion];
        let cua = figura.forma[4] //tamaño de la cuadricula del bitboard
        let bin = fig.toString(2); //numero del bitboard a base 2
        bin = '0'.repeat((cua*cua)-bin.length)+ bin;
        let escala=figura.escala;
        let x1 = Math.round(figura.x/escala);
    
        let y1 = Math.round(figura.y/escala);
        let casillas = '';

        //
        for(let i=0;i< cua*cua;i++){

            let mask = '0'.repeat(i)+'1'+'0'.repeat((cua*cua-1)-i);
         
            
            if ((parseInt(mask,2)&fig) !=0){

                switch (x) {
                    case 0:
                        if (x1 <=0 | y1<=0 | x1> this.casillas[0].length | y1> this.casillas.length)
                            {
                                console.log('ojo');
                                
                                return false;
                            }
                            else{
                                casillas = this.casillas[y1-1][x1-1];
                                if(casillas != '#FFFFFF' ){
                                    console.log('ojo 2');
                                    console.log(x1);
                                    console.log(y1);

                                    return false;
                                }
                            }
                        break;
                    case 1:
                        if(x1 <= 0 | y1<=0){
                            console.log('ojo 3');
                            return false
                        }
                        tablero.casillas[y1-1][x1-1] =figura.color;    
                        break;
                    default:
                        break;
                }
                
                


                
               
            }

            x1=x1+1;
            if(((i+1)%cua) == 0){
            y1=y1+1;
            x1=Math.round(figura.x/escala);  
            }
            
        }return true;   
    }

    nitro()
    {
        let flag = true;
        while(flag){
            flag =figura.mover(0,+1);
        }
        tablero.verificar_colisiones(1);
        figura.vida = 0;
        return true;
    }

    
}