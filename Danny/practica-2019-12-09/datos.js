class Cuadrado {
    constructor ( lado ){
        this.lado = lado;
    }
    calcularArea(){
        return this.lado*this.lado;
    }
    get area(){
        return this.calcularArea();
    }
}

var cuad = new Cuadrado(4);
console.log(cuad.area);