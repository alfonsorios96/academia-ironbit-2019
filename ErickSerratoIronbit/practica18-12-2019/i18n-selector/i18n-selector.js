import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-select/vaadin-select.js';


class I18nSelector extends LitElement {
  static get styles() {
    return style;
  }


  render() {
    let langs = [];
    for (const lang in lenguages) {
        langs = [...langs, html`<vaadin-item value="${ lang }">${ lenguages[lang].name }</vaadin-item>`];
      
    }
    return html`
        <p>Language Practice</p>
        <vaadin-select     id="lenguageselector"  label="Lenguage"   placeholder ="Seleccione">
          <template>
            <vaadin-list-box>
              ${langs}
            </vaadin-list-box>
          </template>
         </vaadin-select>
        
      `;
    }
    
}


window.customElements.define("i18n-selector", I18nSelector);
