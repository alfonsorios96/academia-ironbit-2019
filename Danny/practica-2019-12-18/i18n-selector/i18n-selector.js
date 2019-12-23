import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';

import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-button/vaadin-button';

class I18nSelector extends LitElement {
 /* static get properties() {
    return {
      data: String,
      frances: Map,
      espanol: Map,
      english: Map
    };
  } */

  static get styles() {
    return style;
  }

  /* constructor() {
    super();
    this.data = '';
    this.dataJSON = '';
    this.frances = new Map();
    this.espanol = new Map();
    this.english = new Map();
    this.lenguages = new Map();
  }*/
  buildTranslate(event){
    console.log(lang[event.target.value])
    const mapa = new Map(lang[event.target.value]);
    //this.dataJSON = JSON.parse(this.data);
    this,this.dispatchEvent(new CustomEvent('languages', {
      detail: mapa
    }));
  }

  render() {
    let languajes = [];
    for (const language in lang) {
      if (lang.hasOwnProperty(language)) {
        languajes = [...languajes, html`<vaadin-item value="${ language }">${ lang[language].nameLanguage }</vaadin-item>`]
      }
    }
    return html`
      
        <div class="container">
            <div class="prepareStatement">
                <vaadin-button>Prepare the Translate</vaadin-button>
            </div>

          <div class="build">
              <vaadin-select label="Select you lang" @change="${ this.buildTranslate }">
                  <template>
                    <vaadin-list-box>
                        ${ languajes }
                    </vaadin-list-box>
                  </template>
                </vaadin-select>

          </div>
          <div class="buttonCharge">
              <vaadin-button @click="${this.buildTranslate}">Prepare Translate</vaadin-button>
          </div>
            
            <h1>${this.dataJSON}</h1>
        </div>
      `;
    }
}

window.customElements.define("i18n-selector", I18nSelector);
