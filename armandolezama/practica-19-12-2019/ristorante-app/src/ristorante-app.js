import {LitElement, html} from 'lit-element';

// These are the elements needed by this element.
import {styles} from './ristorante-styles.js';
import { fadeInTransitionPage } from './utils/ristorante-transitions.js';

import './pages/default-page.js';
import './pages/home-page.js';
import './pages/menu-page.js';
import './pages/add-form-page.js';
import '@polymer/paper-button/paper-button.js';
// import {menuIcon} from './utils/ristorante-icons.js';

class Ristorante extends LitElement {
  static get properties() {
    return {
      appTitle: {type: String},
      _page: {type: String},
      url: {type: String},
      data: {type: Object}
    };
  }

  static get styles() {
      return [
          styles,
          fadeInTransitionPage
        ];
    }

  render() {
    return html`
      <style>
        .main-app.out {
              animation: ${this._config.transition.type}TransitionPage ${this._config.transition.delay / 1000}s;
          }
      </style>
      <!-- Header -->
      <header class="header-app">
        <div class="title container-app">
          Catsys (beta)
        </div>
        <nav class="navbar-principal">
          <paper-button @click="${this.changePage}" page="home">Home</paper-button>
          <paper-button @click="${this.changePage}" page="default">Default</paper-button>
          <paper-button @click="${this.changePage}" page="menu">Menu</paper-button>
          <paper-button @click="${this.changePage}" page="add-form">Añadir platillo</paper-button>
        </nav>
      </header>
      <!-- Main content -->
      <main role="main" class="container-app main-app">
        ${
            this._page === 'home' ?
              html`<home-page class="page" active></home-page>` :
              ''
        }
        ${
          this._page === 'default' ?
            html`<default-page class="page" active></default-page>` :
            ''
        }
        ${
          this._page === 'menu' ?
            html`<menu-page class="page" active></menu-page>` :
            ''
        }
        ${
          this._page === 'add-form' ?
            html`<add-form-page class="page" active></add-form-page>` :
            ''
        }
      </main>
      <footer class="footer-app">
        <div class="container-footer">
          <p>Made with &#9829; by the Catsys team.</p>
        </div>
        <a class="social-github" href="https://github.com/alfonsorios96/catsys-cli">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github-logo">
          <b>View on github</b>
        </a>
      </footer>
    `;
  }

  constructor() {
    super();
    this._page = 'home';
    this._config = {
      type: 'app',
      transition: {
        type: 'fadeIn',
        delay: 300
      }
    };
    this.data = {}
    this.url = 'http://localhost:3000/food/dishes';
  }

  firstUpdated() {
    fetch(`${this.url}`).then(response => response.json())
      .then(()=>{
        this.data = response;
      })
    customElements.whenDefined('menu-page').then(() => {
      const menuPage = this.shadowRoot.querySelector('menu-page');
      
      menuPage.addEventListener('edit-data', event => {
        fetch(`${this.url}/PUT/posts/${event.detail.id}`).then(() => {
          this._page = 'menu-page'
        })
      });
      menuPage.addEventListener('delete-data', event => {
        fetch(`${this.url}/DELETE/posts/${event.detail.id}`).then(() => {
          this._page = 'menu-page'
        })
      });
    })
  }
  changePage(event) {
      const page = event.currentTarget.getAttribute('page');
      this._page = page;
    }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageOut = this.shadowRoot.querySelector('.main-app');
      pageOut.classList.add('out');
      setTimeout(() => {
        pageOut.classList.remove('out');
      }, this._config.transition.delay);
    }
  }
}

window.customElements.define('ristorante-app', Ristorante);
