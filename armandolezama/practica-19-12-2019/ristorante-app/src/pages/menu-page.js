import { LitElement, html, css } from 'lit-element';
import '@catsys/element-layout/element-layout';

export class MenuPage extends LitElement {

    firstUpdated() {
        const elementLayout = this.shadowRoot.querySelector('element-layout');
        elementLayout.addEventListener('edit-data', event => {
            this.dispatchEvent(new CustomEvent('edit-data', {detail:event.detail}))
        });
        elementLayout.addEventListener('delete-data', event => {
            this.dispatchEvent(new CustomEvent('delete-data', {detail:event.detail}))
        })
    }
    render() {
        return html`
        <element-layout></element-layout>
        `;
    }
}
customElements.define('menu-page', MenuPage);