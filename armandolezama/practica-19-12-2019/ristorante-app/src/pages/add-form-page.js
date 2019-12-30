import { LitElement, html } from 'lit-element';
import '@catsys/element-form/element-form';

export class AddFormPage extends LitElement {

    firstUpdated(){
        const elementForm = this.shadowRoot.querySelector('element-form');
        elementForm.addEventListener('sent-info', event => {
            const details = event.detail;
            this.dispatchEvent(new CustomEvent('sent-info', {
                detail: details
            }));
        });
    };

    render() {
        return html`
        <element-form></element-form>
        `;
    }
}
customElements.define('add-form-page', AddFormPage);