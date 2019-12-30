import {LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-select/vaadin-select.js'

class MyElement extends LitElement {
  static get properties () {
    return {
      table: Array,
      title: String,
      a: Number,
      b: Number,
      c: Number
    }
  }

  static get styles (){
    return css`
    h2 {
        color: purple;
    }
    
    table {
        border: 4px solid black;
    }
      `;
  }

  constructor (){
    super();
    this.table = [];
    this.title = '';
    this.a = 0;
    this.b = 0;
    this.c = 0;
  }

  updated(_ChangedPropierties){
    if (_ChangedPropierties.has('a') || _ChangedPropierties.has('b')) {
      this.c = Number(this.a) + Number(this.b);
      this.multiplyTable();
    }  
  }

  render() {
    return html`
        <h2> ${this.title}</h2>  
        
        <vaadin-text-field placeholder="0" @input="${this.aChanged}"></vaadin-text-field>
        <vaadin-text-field placeholder="0" @input="${this.bChanged}"></vaadin-text-field> 
        <table>
          <thead>
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => html`<th>${number}</th>`)}
          </thead>
          <tbody>
            <tr>
              ${this.table.map(number => html`<td>${number}</td>`)}
            </tr>
          </tbody>
        </table>
                `;
  }

    multiplyTable() {
    this.table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => number * this.c);
  }

    aChanged(event) {
    this.a = event.target.value;
  }

    bChanged(event) {
    this.b = event.target.value;
  }

}

customElements.define('my-element', MyElement);