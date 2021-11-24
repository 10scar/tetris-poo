class Tablero{
    constructor(escala= 100,dimx =10 ,dimy=20){
        this.escala = escala;
        this.casillas = new Array(dimy).fill(new Array(dimx).fill('#FFFFFF'));
    }
    get marco(){
        
    }
    dibujar(){
        console.log(this.casillas.length);
        for (let i=0;i<this.casillas.length;i++)
        {
            for(let x=0; x<this.casillas[i].length;x++)
            {
                console.log(this.casillas[i][x]);
                fill(this.casillas[i][x])
                rect(this.escala*i,this.escala*x,this.escala);
            }
        }
       
    }
}