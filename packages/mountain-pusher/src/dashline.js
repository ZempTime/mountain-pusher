import { svg } from "lit-html";

export const dashline = svg`
<svg class="dashline" viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="4" />
  </svg>`;
