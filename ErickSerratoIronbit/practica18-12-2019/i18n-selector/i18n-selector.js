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
        <vaadin-select     id="lenguageselector"  label="Lenguage"  @change="${ this.changeLanguage }"  placeholder ="Seleccione">
          <template>
            <vaadin-list-box>
              ${langs}
            </vaadin-list-box>
          </template>
         </vaadin-select>
        
      `;
    }
    changeLanguage(event) {
      const languageSelected = event.target.value;
      const languageMap =  new Map(Object.entries(this.langs.get( languageSelected )));
      this.dispatchEvent(new CustomEvent('i18nEvent', { detail: languageMap }))
    }
}


window.customElements.define("i18n-selector", I18nSelector);
