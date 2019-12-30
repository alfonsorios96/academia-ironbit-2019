import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';

class I18nSelector extends LitElement {
    static get styles() {
        return style;
    }
    
    constructor() {
        super();
    }
    
    render() {
        return html`
            <select class="select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
        `;
    }
}

window.customElements.define("i18n-selector", I18nSelector);
