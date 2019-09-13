import { LitElement, html, css } from "lit-element";
import { mountain } from "./mountain";
import { start } from "./start";
import { guyPushing } from "./pushingGuy";

export class MountainPusher extends LitElement {
  static get properties() {
    return {
      distance: { type: Number }
    };
  }

  constructor() {
    super();
    this.distance = 0;
    this.dashedLine = "- - - ";
  }

  handleClick() {
    this.distance += 1;
    this.dashedLine += "- ";
  }

  render() {
    return html`
    <div class="page">
      <div></div>
      <span class="centercolumn">
        <span>Short-Term Client Things</span>
        <span>↓</span>
        <div class="container">${start}<span class="dashline">${this.dashedLine}</span><span style="transform: translateX(calc(5px * ${this.distance}))">${guyPushing}${mountain}<span></div>
        <button @click="${this.handleClick}" class="button">Add before microservices!</button>
      </span>
      <div></div>
    </div>
    `;
  }

  static get styles() {
    return [
      css`
        .mountain {
          height: 250px;
          width: 200px;
        }

        .start {
          height: 55px;
        }

        .guyPushing {
          height: 50px;
          transform: translateX(10px);
          z-index: -1;
        }

        .dashline {
          margin-bottom: 22px;
        }

        .container {
          display: flex;
          align-items: flex-end;
        }

        .page {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
        }

        button {
          display: inline-block;
          border: none;
          padding: 1rem 2rem;
          margin: 0;
          text-decoration: none;
          background: #0069ed;
          color: #ffffff;
          font-family: sans-serif;
          font-size: 1rem;
          cursor: pointer;
          text-align: center;
          transition: background 250ms ease-in-out, transform 150ms ease;
          -webkit-appearance: none;
          -moz-appearance: none;
          align-self: center;
        }

        .centercolumn {
          display: flex;
          align-items: center;
          justify-items: center;
          flex-direction: column;
        }
      `
    ];
  }
}
