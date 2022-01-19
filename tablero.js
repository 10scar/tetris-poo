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

    verificar(){
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


    
}