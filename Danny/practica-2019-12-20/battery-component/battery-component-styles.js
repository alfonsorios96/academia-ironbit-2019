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

.battery {
  border: 1px solid black;
  width: 100px;
  height: 50px;
  display: flex; }

.container {
  width: 1600px;
  height: 1200px; }

.color-batt {
  width: 95px;
  height: 45px;
  background-color: red;
  margin: auto auto; }
`;
