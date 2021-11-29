class Tablero{
    constructor(escala= 100,dimx =10 ,dimy=20){
        this.escala = escala;
        this.casillas = new Array(dimy).fill(new Array(dimx).fill('#FFFFFF'));
        //this.color_tema = color(white);
    }

    dibujar(){
        console.log(this.casillas.length);
        for (let i=0;i<this.casillas.length;i++)
        {
            for(let x=0; x<this.casillas[i].length;x++)
            {
               
                fill(this.casillas[i][x])
                rect((this.escala*i)+this.escala,(this.escala*x)+this.escala,this.escala);
            }
        }
       
    }

    dibujar_marco(){
        let ancho = this.casillas.length;
        let alto = this.casillas[0].length;
        
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
    
}