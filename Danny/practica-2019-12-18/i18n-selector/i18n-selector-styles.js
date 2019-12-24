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

.container {
  width: 1200px;
  background-color: aquamarine;
  margin: 0 auto; }

.build {
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; }
`;
