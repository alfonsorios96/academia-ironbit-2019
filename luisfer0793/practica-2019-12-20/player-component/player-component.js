import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

class PlayerComponent extends LitElement {
    static get properties() {
        return {
            hello: { type: String }
        };
    }
    
    static get styles() {
        return style;
    }
    
    constructor() {
        super();
        this.hello = 'Hello';
    }
    
    getMusic() {
        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                const track = new Audio();
                const source = document.createElement('source');
                source.setAttribute('src', data.audio);
                track.appendChild(source);
                console.log(track);
                // track.play();
            })
            .catch(error => console.error(error))
    }
    
    render() {
        return html`
            <div class="player-component">
                <h2 class="player-component-artist">Artist</h2>
                <h3 class="player-component-song">Song</h3>
                <button class="player-component-button" @click="${this.getMusic}">Play</button>
            </div>
        `;
    }
}

window.customElements.define("player-component", PlayerComponent);
