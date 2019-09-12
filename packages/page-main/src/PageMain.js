import { html, css, LitElement } from "lit-element";

export class PageMain extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        text-align: center;
      }

      svg {
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }

  static get properties() {
    return {
      distance: { type: Number }
    };
  }

  constructor() {
    super();
    this.distance = 0;
  }

  render() {
    return html``;
  }
}
