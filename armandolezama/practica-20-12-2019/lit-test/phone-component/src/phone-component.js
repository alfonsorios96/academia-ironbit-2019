import { LitElement, html, css } from 'lit-element';
import '@phone/battery-component/src/battery-component';
import '@phone/player-component/src/player-component';

export class PhoneComponent extends LitElement {
    static get styles() {
        return css`
        div {
            display: inline-block
        }
        `
    }

    firstUpdated(){
        this.init()
    }

    init(){
        const player = this.shadowRoot.querySelector('player-component')
        const battery = this.shadowRoot.querySelector('battery-component')
        player.addEventListener('player-paused', () => {
            battery.stopDischarge();
        })
        player.addEventListener('player-playing', () => {
            if(battery.battery > 10){
                battery.discharge();
            } else {
                player.pause();
                battery.stopDischarge();
            }
        })
        battery.addEventListener('battery-status', event => {
            if(event.detail.batteryStatus <= 10){
                player.pause();
            }
            
        })
        
    }

    charge(){
        const battery = this.shadowRoot.querySelector('battery-component')
        battery.charge();
    }

    disconnected(){
        const battery = this.shadowRoot.querySelector('battery-component')
        battery.stopCharge();
    }

    render() {
        return html`
        <section class="phone">
            <battery-component></battery-component>
            <player-component></player-component>
            <button @click="${this.charge}">Cargar</button>
            <button @click="${this.disconnected}">Desconectar</button>
        </section>
        `;
    }
}
customElements.define('phone-component', PhoneComponent);