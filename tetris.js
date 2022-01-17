const colors = ['#11B6CA','#CA1178','#DA522E'];
const figuras = {
    l: [3840,8738,240,17476,4],
    j: [312,210,57,150,3],
    o: [26112,26112,26112,26112,4],
    s: [240,153,30,306,3],
    t: [184,154,58,178,3],
    z: [408,90,51,180,3],

};


///en construccion.
class Ficha{
    constructor(rotacion =0,escala =100){
        this.escala = escala;
        this.rotacion = rotacion;
        this.vida= 1;
        this.x = 3*this.escala;
        this.y=3*this.escala;
        
    }

    get color(){
        this._color = this._color == undefined ? this.random(colors): this._color
        return this._color;
    }
    set color(color){ 
        this._color = color;
    }

    get forma(){
        this._forma = this._forma == undefined? this.random(figuras): this._forma;
        return this._forma;
        
    }
    set forma(forma){ return this._forma = forma}

    get rotacion(){
        this._rotacion = this._rotacion == undefined? 0:this._rotacion;
        return this._rotacion
    }
    set rotacion(rotacion){
        this._rotacion = rotacion;
        return;
    }

    
    random(obj){
        let key =Object.values(obj);
        let fig = key[Math.floor(Math.random() * key.length)];
        return fig;
    }

    mover(x,y =0){
        this.x = this.x +(this.escala*x);
        this.y = this.y +(this.escala*y);
        if(this.verificar()){
            this.x = this.x -(this.escala*x);
            this.y = this.y -(this.escala*y);
            return true;
        }
        return false;
    }

    dinamicas(){

        if(tablero.frames == 60){

            
            tablero.frames = 0;
            //verficar vida del objetof
            
            //figura.verificar();
            //verificar colisiones
            
            if(this.mover(0,+1))
            {
                this.vida = 0;
                this.verificar(1);
                this.reiniciar();
            }
            
        }
        tablero.frames++;
    }

    verificar(x=0){
        console.log(this.rotacion);
        let fig = this.forma[this.rotacion];
        let cua = this.forma[4]
        let bin = fig.toString(2);
        bin = '0'.repeat((cua*cua)-bin.length)+ bin;
        let escala=this.escala;
        let x1 = this.x/escala;
        let y1 = this.y/escala;
        let casillas = '';

        //
        for(let i=0;i< cua*cua;i++){

            let mask = '0'.repeat(i)+'1'+'0'.repeat((cua*cua-1)-i);
         
            
            if ((parseInt(mask,2)&fig) !=0){
                switch (x) {
                    case 0:
                        if (x1 <=0 | y1<=0 | x1> tablero.casillas[0].length | y1> tablero.casillas.length)
                            {
                                console.log('ojo');
                                
                                return true;
                            }
                            else{
                                console.log(y1);
                                casillas = tablero.casillas[y1-1][x1-1];
                                if(casillas != '#FFFFFF' ){
                                    return true;
                                }
                                console.log(casillas);
                                console.log(x1);
                                console.log(y1);
                            }
                        break;
                    case 1:
                        tablero.casillas[y1-1][x1-1] =this._color;    
                        break;
                    default:
                        break;
                }
                
                


                
               
            }

            x1=x1+1;
            if(((i+1)%cua) == 0){
            y1=y1+1;
            x1=this.x/escala;  
            }
            
        }
      
    }

    reiniciar(){
    if(this.vida == 0){
        this.color = this.random(colors);
        this.forma = this.random(figuras);
        this.vida= 1;
        this.x = 4*this.escala;
        this.y=0*this.escala; 
    }
        

    }

    dibujar(){
        let fig = this.forma[this.rotacion];
        let cua = this.forma[4]
        let bin = fig.toString(2);
        bin = '0'.repeat((cua*cua)-bin.length)+ bin;
        let escala=this.escala;
        let x1 = this.x;
        let y1 = this.y;
        let v = 0;
        for(let i=0;i< cua*cua;i++){


            let mask = '0'.repeat(i)+'1'+'0'.repeat((cua*cua-1)-i);
         
            
            if ((parseInt(mask,2)&fig) !=0){
                fill(this.color);
                rect(x1,y1,escala);
                v=v+1;

            
                beginShape();
                vertex(x1+(escala/10), y1+(escala/10));
                vertex(x1+(escala/10),y1+escala-(escala/15));
                vertex(x1+escala-(escala/15),y1+(escala/10));
                vertex(x1+(escala/10), y1+(escala/10));
                endShape();

                beginShape();
                vertex(x1+escala-(escala/10), y1+escala-(escala/10));
                vertex(x1+escala-(escala/10),y1+(escala/15));
                vertex(x1+(escala/15),y1+escala-(escala/10));
                vertex(x1+escala-(escala/10), y1+escala-(escala/10));
                endShape();
               
            }

            x1=x1+escala;
            if(((i+1)%cua) == 0){
            y1=y1+escala;
            x1=this.x;  
            }
            
        }
     
    }


    rotar(){
        this.rotacion = (++this.rotacion)%4;
        if(this.verificar()){
            this.rotacion = (this.rotacion-1)%4;
            if(this.rotacion<0){
                this.rotacion = 3;
            }
        }
        return this.rotacion;
    }

}

