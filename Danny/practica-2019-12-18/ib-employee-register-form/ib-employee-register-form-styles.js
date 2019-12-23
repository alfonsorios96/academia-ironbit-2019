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

h2 {
  color: #e22b43; }

.container-form {
  width: 1200px; }

.list-form {
  display: flex;
  flex-direction: column; }

.field {
  display: flex;
  flex-direction: row;
  width: auto;
  margin: 0 10px 10px; }

form {
  width: 700px;
  margin: 0 auto; }

legend {
  margin-bottom: 20px; }

.lit-field {
  width: auto; }

.two-fields {
  display: flex;
  flex-direction: row; }

label {
  margin-right: 10px; }

vaadin-text-field {
  padding: 5px; }

.buttonA {
  width: auto;
  display: flex;
  justify-content: center; }
`;
