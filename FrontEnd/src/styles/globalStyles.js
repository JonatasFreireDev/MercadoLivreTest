import { createGlobalStyle } from 'styled-components';

import { grey_light } from '~/styles/colors';

export default createGlobalStyle`
   *{
      margin: 0;
      padding:0;
      outline: 0;
      box-sizing: border-box;
   }
   body{
      overflow-x: hidden;
      background: ${grey_light};
      -webkit-font-smoothing: antialiased;
   }
   body, input, button{
      font: 14px sans-serif;
   }
   #root{
      margin: 0 auto;
   }
   button{
      cursor: pointer;
   }
   hr{
      opacity: 0.2;
      border-color: ${grey_light};
      margin: 0 25px;
      color: red;
`;
