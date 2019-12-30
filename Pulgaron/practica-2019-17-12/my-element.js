import {LitElement, html, css} from "lit-element";

import '@vaadin/vaadin-text-field/vaadin-text-field';

class MyElement extends LitElement {
    static get properties() {
        return {
            table: Array,
            title: String,
            a: Number,
            b: Number,
            c: Number
        }
    }

    static get styles() {
        return css`
            h2 {
                color: green;
                margin-left: 25px;
            }

            td, th {
                border: 1px solid #999;
                padding: 0.5rem;
              }

            #table{
                padding-top: 10px;
                padding: 20px;
            }
            
        `;
    }

    constructor() {
        super();
        this.table = [];
        this.title = 'Tabla de multiplicaciones';
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }

    updated(_changedProperties) {
        if (_changedProperties.has('a') || _changedProperties.has('b')) {
            this.c = parseInt(this.a) + parseInt(this.b);
            this.multiply();
        }
    }

    render() {
        return html`
            <h2>${this.title}</h2>  
            
            <vaadin-text-field placeholder="Primer Numero" @input="${this.aChanged}"></vaadin-text-field>
            <vaadin-text-field placeholder="Segundo numero" @input="${this.bChanged}"></vaadin-text-field>
            
            <div id="table">
                <table>
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                        <tr>
                    </thead>
                    <tbody>
                        <tr>
                            ${this.table.map(number => html`<td>${number}</td>`)}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    multiply() {
        this.table = [];
        for (let index = 1; index <= 10; index++) {
            this.table = [...this.table, this.c*index];
        }
    }

    aChanged(event) {
        this.a = event.target.value;
    }

    bChanged(event) {
        this.b = event.target.value;
    }
}

customElements.define('my-element', MyElement);
