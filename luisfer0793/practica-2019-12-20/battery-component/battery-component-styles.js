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

html {
  font-size: 62.5%; }

.battery-component {
  position: relative;
  width: 15rem;
  height: 5rem;
  border-radius: .5rem;
  border: .1rem solid #172030; }

.battery-component-level {
  width: 80%;
  height: 100%;
  border: none;
  border-radius: .5rem;
  background-color: chartreuse; }

.battery-component-indicator {
  position: absolute;
  padding: 1rem 0;
  top: 50%;
  left: 50%;
  font-family: 'Montserrat', sans-serif;
  font-size: 100%;
  text-align: center;
  transform: translate(-50%, -50%); }
`;
