import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

.select {
  padding: 10px 15px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid #c2c3c2; }

.select:focus {
  outline: none; }
`;
