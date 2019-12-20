import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icons/av-icons';
import '@vaadin/vaadin-button/vaadin-button.js';


class PlayerComponent extends LitElement {
  static get properties() {
    return {
      song :String,
      iconRep : String,
      reproduce:Boolean
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.song = '';
    this.iconRep = 'av:play-circle-filled';
    this.reproduce =  true;
  }

  render() {
    return html`
    <paper-card  alt="Emmental">
      <div class="card-content">
        Artitst-"${this.song}"
      </div>
      <div class="card-actions">
        <audio src="${this.song}" id="songaudio" > </audio> 
        <vaadin-button theme="icon" aria-label="Add new item" label="" class="icon-component" @click="${this.songplay}" >
          <iron-icon icon="${this.iconRep}" ></iron-icon>  
        </vaadin-button>   
      </div>
    </paper-card>
    
      `;
    }

    songplay(){
      if(this.reproduce){
        this.iconRep = 'av:pause-circle-filled';
        this.playing() ;
        this.reproduce = false;
      }else{
        this.iconRep = 'av:play-circle-filled';
        this.pause();
        this.reproduce = true
      }
    }

    playing(){
      this.shadowRoot.getElementById('songaudio').play();
    }

    pause(){
      this.shadowRoot.getElementById('songaudio').pause();
    }
}

window.customElements.define("player-component", PlayerComponent);
