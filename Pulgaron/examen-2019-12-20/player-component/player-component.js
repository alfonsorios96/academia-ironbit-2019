import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';
import 'music-component/music-component';

/**
 * `<player-component>` shelter <music-component> and uses a fetch promise to get a song
 * to see the player in action, just put the player-component tag and play the song
 * <body>
 *   <player-component></player-component>
 * And now u have your player working voalaa
 * @customElement
 * @polymer
 *
 */

class PlayerComponent extends LitElement {
  static get properties() {
    return {
      /** gets an url song fot the music component*/
      urlSong: String
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.urlSong = "";
    this.urlSong = "";
    this.object = {
      id: 916555,
      readable: true,
      title: "Lose Yourself",
      title_short: "Lose Yourself",
      title_version: "",
      link: "https://www.deezer.com/track/916555",
      duration: 320,
      rank: 632780,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 2,
      preview: "https://cdns-preview-8.dzcdn.net/stream/c-8d5dd68d7b62a5d1eed5bfcd1cfbe53b-7.mp3"
    }
  }

  render() {
    return html`
        <music-component  list-request-url="https://music-server-jansolote.herokuapp.com/tracks" song-url="https://music-server-jansolote.herokuapp.com/track/"></music-component>
      `;
    }


}

window.customElements.define("player-component", PlayerComponent);
