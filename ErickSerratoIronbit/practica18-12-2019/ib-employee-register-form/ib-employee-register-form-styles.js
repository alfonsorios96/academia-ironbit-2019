import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}
#conteiner{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#form1{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#form2{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row ;
}

#form22{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}


*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}
`;
