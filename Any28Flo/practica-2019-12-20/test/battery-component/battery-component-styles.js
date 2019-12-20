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
  position: relative;
  display: block;
  margin: 35px 0 0 5px;
  background: #ffffff;
  width: 50px;
  height: 17px;
  float: left;
  margin-left: 250px; }

.battery:before {
  content: "";
  display: block;
  background: transparent;
  border: 6px solid black;
  margin: -12px;
  width: 85px;
  height: 40px;
  position: absolute;
  border-radius: 2px; }

.battery:after {
  content: "";
  display: block;
  background: transparent;
  border: 6px solid black;
  margin: 0px 80px;
  width: 6px;
  height: 16px;
  position: absolute;
  border-radius: 2px; }

.battery.empty {
  width: 5px;
  background-color: red; }

.battery.half {
  background-color: yellow;
  width: 40px; }

.battery.full {
  width: 72px;
  background-color: green; }
`;
