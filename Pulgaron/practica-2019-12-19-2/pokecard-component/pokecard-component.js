import { html, LitElement } from 'lit-element';
import style from './pokecard-component-styles.js';
import '@polymer/paper-card';

class PokecardComponent extends LitElement {
  static get properties() {
    return {
      pokemon: Object
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.pokemon = {};
  }



  render() {
    return html`
        <paper-card heading="${this.pokemon.name}" image="${this.pokemon.sprites.front_default}">
   <div class="card-content">
            <ul>
              <li>${this.pokemon.height}</li>
              <li>${this.pokemon.experience}</li>
              <li>${this.pokemon.id}</li>
              <li>${this.pokemon.weight}</li>
            </ul>
          </div>
        </paper-card>
        `
  }
}

window.customElements.define("pokecard-component", PokecardComponent);
