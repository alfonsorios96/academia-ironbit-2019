import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-button';

class I18nSelector extends LitElement {
  static get properties() {
    return {
      languages: {type: Object}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.languages = {};
  }

  render() {
    return html`
        <vaadin-select id="lg" label="Idioma" disabled placeholder="Seleccionar">
					<template>
						<vaadin-list-box>
							<vaadin-item value="es">Español</vaadin-item>
							<vaadin-item value="en">Inglés</vaadin-item>
							<vaadin-item value="fr">Francés</vaadin-item>
						</vaadin-list-box>
          </template>
        </vaadin-select>
        <vaadin-button @click="${this.showLanguage}">Aceptar</vaadin-button>
      `;
    }

    showSelect(){
      this.shadowRoot.whenDefined('vaadin-select').then(()=>{
        this.shadowRoot.querySelector('#lg').removeAttribute('disabled');
      })
    }

    showLanguage(){
      const lg = this.shadowRoot.querySelector('#lg').value;
      const map = new Map(Object.entries(this.languages[lg]));

      this.dispatchEvent(new CustomEvent('language-request', {
        detail: map
      }));
    }
}

window.customElements.define("i18n-selector", I18nSelector);
