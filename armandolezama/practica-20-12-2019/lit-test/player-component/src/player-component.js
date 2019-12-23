import { LitElement, html, css } from 'lit-element';

export class PlayerComponent extends LitElement {
    static get styles() {
        return css`
        * {
            box-sizing: border-box;
          }
          
          body {
            background-size: 6px 6px !important;
            background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 46%, coral 49%, coral 51%, rgba(0, 0, 0, 0) 55%);
            background-color: white;
            padding-top: 60px;
          }
          
          .audio-player {
            width: 470px;
            padding: 35px 20px;
            margin: auto;
            background-color: white;
            border: 1px solid black;}
          
            .player-controls {
              position: relative;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          
            #radioIcon {
              width: 30px;
              height: 30px;
              background: url('https://image.flaticon.com/icons/svg/149/149429.svg') no-repeat center;
            }
          
            #playAudio {
              -webkit-appearance: none;
              outline: none;
              cursor: pointer;
              border: none;
              width: 30px;
              height: 30px;
              background: url('https://image.flaticon.com/icons/svg/149/149125.svg') no-repeat center;
              background-size: contain;
          
            }
            
            #playAudio.pause {
                background: url('https://image.flaticon.com/icons/svg/149/149127.svg') no-repeat center;
                background-size: contain;
            }
          
            p {
              margin: 0 0 0 5px;
              line-height: 1;
              display: inline-flex;
          
            }
            
            small {
              font-size: 10px;
            }
            #seekObjContainer {
              position: relative;
              width: 300px;
              margin: 0 5px;
              height: 5px;
          
            }
            #seekObj {
            position:relative;
            width: 100%;
            height: 100%;
            background-color: #e3e3e3;
            border: 1px solid black;
            }
            #percentage {
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
              background-color: coral;
            }
          
        `
    }
    
    constructor() {
        super();
        this.media = {};
        this.ui = {
            play: 'playAudio',
            audio: 'audio',
            percentage: 'percentage',
            seekObj: 'seekObj',
            currentTime: 'currentTime'
            };
    }

    static get properties() {
        return {
            media : {type: Object}
        };
    }
    _auxiliarFunction(id){
        return this.shadowRoot.querySelector(`#${id}`)
    }

    _calculatePercentPlayed () {
        let percentage = (this.media.currentTime / this.media.duration).toFixed(2) * 100;
        this._auxiliarFunction(this.ui.percentage).style.width = `${percentage}%`;
    }

    _togglePlay () {
        this.media = this.shadowRoot.querySelector('#audio');
        if (this.media.paused === false) {
                this.media.pause();
                this._auxiliarFunction(this.ui.play).classList.remove('pause');
                this.dispatchEvent(new Event('player-paused'))
            } else {
                this.media.play();
                this._auxiliarFunction(this.ui.play).classList.add('pause');
                this.dispatchEvent(new Event('player-playing'))
        }
    }

    pause(){
      if (this.media.paused === false) {
        this.media.pause();
        this._auxiliarFunction(this.ui.play).classList.remove('pause');
        this.dispatchEvent(new Event('player-paused'));
      }
    }

    _calculateCurrentValue (currentTime) {
        const currentMinute = parseInt(currentTime / 60) % 60;
        const currentSecondsLong = currentTime % 60;
        const currentSeconds = currentSecondsLong.toFixed();
        const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
        currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
        }`;
        
        return currentTimeFormatted;
    }

    _seek (e) {
        const percent = e.offsetX / this.offsetWidth;
        this.media.currentTime = percent * this.media.duration;
    }

    _initProgressBar() {
        const currentTime = this._calculateCurrentValue(this.media.currentTime);
        this._auxiliarFunction(this.ui.currentTime).innerHTML = currentTime;
        this._auxiliarFunction(this.ui.seekObj).addEventListener('click', this._seek.bind(this));

        this.media.onended = () => {
            this._auxiliarFunction(this.ui.play).classList.remove('pause');
            this._auxiliarFunction(this.ui.percentage).style.width = 0;
            this._auxiliarFunction(this.ui.currentTime).innerHTML = '00:00';
        };
        
        this._calculatePercentPlayed();
        }

    init(){
        this.media = this.shadowRoot.querySelector('#audio');
        this._auxiliarFunction(this.ui.play).addEventListener('click', this._togglePlay.bind(this))
        this._auxiliarFunction(this.ui.audio).addEventListener('timeupdate', this._initProgressBar.bind(this));
    }

    firstUpdated(){
       this.init();
    }
    render() {
        return html`
        <div class="audio-player">

        <audio id="audio">
        <source src="https://thenewcode.com/assets/audio/24-ghosts-III.mp3" type="audio/mp3">
        </audio>

        <div class="player-controls">

        <div id="radioIcon"></div>

        <button id="playAudio"></button>

        <div id="seekObjContainer">
            <div id="seekObj">
            <div id="percentage"></div>
            </div>
        </div>

        <p><small id="currentTime">00:00</small></p>

        </div>
        </div>
    `;
    }
}
customElements.define('player-component', PlayerComponent);