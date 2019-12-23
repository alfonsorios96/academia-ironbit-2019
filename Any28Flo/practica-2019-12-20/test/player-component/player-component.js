import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

import '@polymer/paper-card/paper-card.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';

class PlayerComponent extends LitElement {
  static get properties() {
    return {
      isPlaying: { type: Boolean },
      src : {type: String},
      imgSrc : {type: String}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.nameArtis ="Lady Gaga",
    this.nameSong ="Poker Face"
    this.isPlaying = false;
    this.src = "http://www.sousound.com/music/healing/healing_01.mp3";
    this.imgSrc ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0vRXmXQa3iFkr9Ie2mvIKcCbojmu4MS-HUoitGgUx5_q9jvgkQ&s"
  }

  render() {
    return html`
       <paper-card>
        <div class="card-content">
          <h3>${this.nameArtis}- ${this.nameSong}</h3>
          <img src="${this.imgSrc}">
        </div>
        <div class="card-actions">
        <audio id="myAudio" src="${this.src}" preload="auto"></audio>
        <button @click="${this.playing}"><iron-icon icon="vaadin:play-circle-o"></iron-icon></button>
        <button @click="${this.pause}"><iron-icon icon="vaadin:pause"></iron-icon></button>
        </div>
      </paper-card>
      `;
    }
  playing(){
    const myAudio= this.shadowRoot.querySelector("#myAudio")
    myAudio.play();
  }
  pause(){
    const myAudio= this.shadowRoot.querySelector("#myAudio")
    myAudio.pause();
  }
  
}

window.customElements.define("player-component", PlayerComponent);
