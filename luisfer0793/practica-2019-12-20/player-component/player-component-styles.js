import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit; }

.player-component {
  display: flex;
  width: 300px;
  padding: 50px;
  font-family: 'Montserrat', sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: .1rem;
  border: 1px solid #c2c2c2; }

.player-component-artist {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 500; }

.player-component-song {
  font-size: 20px;
  font-weight: 400;
  padding-top: 5px;
  padding-bottom: 60px; }

.player-component-button {
  display: inline-block;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: lightcoral; }
`;
