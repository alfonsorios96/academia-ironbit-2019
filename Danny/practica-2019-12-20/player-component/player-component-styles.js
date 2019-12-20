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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end; }

.button-rep {
  width: 70px;
  height: 50px;
  border: 2px solid salmon;
  margin-top: 40px;
  margin-bottom: 20px; }

.head-list {
  display: block;
  width: 100%;
  height: 60px;
  text-align: center;
  margin-bottom: 40px;
  color: green;
  font-family: Verdana, Geneva, Tahoma, sans-serif; }

.marco {
  width: 300px;
  height: 200px;
  border: 4px dashed blueviolet;
  border-radius: 20px; }
`;
