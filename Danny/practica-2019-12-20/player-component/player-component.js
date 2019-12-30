import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

class PlayerComponent extends LitElement {
  static get properties() {
    return {
     artist: String,
     song: String
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.artist = 'Unknown';
    this.song = 'Pista ';
  }
  
  
  extractMusic(){
    let songT = null;
    let arrT = null;
    let arrTA = null;
    songT = this.shadowRoot.querySelector('audio').getAttribute('src');
    arrT = songT.split('/');
    arrTA = arrT[2].split('-');
    this.artist = arrTA[1] + arrTA[2];
    this.song = arrTA[0];
   
  }
  playing (event){
      console.log(event);
      this.extractMusic();
      
  }
  pause(event ){
    console.log(event);
  }


  render() {
    return html`
          <div class = "marco">
            <div class="head-list">
               <h2>${this.song} Listening to ... ${this.artist}</h2>
           </div>
            <div class="container">
            <audio id = "audio" controls @play="${this.playing}" @pause="${this.pause}" src="/recursos/Locos-Leon-L.mp3">  
            </audio>
            </div>
          </div>
      `;
    }
}

window.customElements.define("player-component", PlayerComponent);
