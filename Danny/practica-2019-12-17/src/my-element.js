//importar  simple:
import { LitElement, html, css } from 'lit-element';

// Creo una clase extendida de la libreria para utilizar de ella 
export class MyElement extends LitElement {
    constructor(){
        //Con esto creamos  e inicializamos el elemento para no tener problemas futuros
        super();
        this.titulo = 'Hola mundo desde un titulo';
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }
    sumNumbers(a = 0, b= 0){
        return a+b;
    }
    static get properties() {
        return {
            a: Number,
            b: Number,
            c: Number
        }
    }
    static get styles() {
        return css`
            h1{
                color: red;
            }
            .container, .fields-form{
               display: flex;
               justify-content: center;
               align-items: center;
               flex-direction: column;
            }
           
        `;
    }
    asignaValorA(e){
        this.a = Number(e.target.value);
        
    }
    asignaValorB (e) {
        this.b =Number( e.target.value);
        this.c = this.sumNumbers(this.a, this.b);
    }
    render() {
        
       console.log(this.c);
        let prob = [];
        for( let u = 1 ; u<=10; u++){
            prob = [...prob,html`<td> ${u}</td>`];
        }   
        let results = []; 
        for( let u = 1 ; u<=10; u++){
            let multi = u*(this.a + this.b);
            results = [...results, html`<td> ${multi}</td>`];
        }    
        return html`
            <h1> Soy My element </h1>
            
            <div class="container">
                <h2>Consulta la tabla de tu preferencia</h2>
                <div class="fields-form">
                    <form>
                        <fieldset>
                            <legend>Datos a sumar y multiplicar</legend>
                                <label for="valueA">Inserta a</label>
                                <input type="number" id="valueA" @input = "${this.asignaValorA}">
                                <label for="valueB">Inserta B</label>
                                <input type="number" id="valueB" @input = "${this.asignaValorB}">
                                
                        </fieldset>
                    </form>   
                    <div class="table">
                        <table border="2px">
                            <thead>
                                ${prob}
                            </thead>
                            <tbody>
                                <tr>
                                    ${results}
                                </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            
            <hr>
        `;
        
    }
}

// Aqui definimos la etiqueta del componente 
//para que sea reconocible para el window
window.customElements.define('my-element', MyElement);
/* SERVIDOR DE DESARROLLO */

// Para instalar pillyfills es para que sea haga compatible con todos los navegadores


/*  
Los componentes para un Web Component o un componente de Lit 
Shadow DOM : 
    El shadow Dom es algo que se renderiza o que se crea y que se pinta  pero que no pertenece al Dom Clasico lo que se conoce como 
    Ligth DOM que es lo que se pinta por Default
        IMPORTANTE : El Dom Clasico o Light Dom no esta conectado directamente con el Shadow Dom que es el dominio donde estan trabajando nuestros Web Components
Templates:
    Son las plantillas que generamos cuando le ponemos el return html `` donde incluimos etiquetas de html que elijamos que constituyen al componente construido
ES MODULES:
    Es parte fundamental por que al crearla, usamos la importacion y export para poder usarla en nuestro documento html
Custom Elements : 
    En custom Elements es importante por que creamos una etiqueta personalizada para nuestro elemento.
    
*/