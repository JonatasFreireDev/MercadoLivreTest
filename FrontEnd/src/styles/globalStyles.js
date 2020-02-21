import { createGlobalStyle } from 'styled-components';

import { grey } from '~/styles/colors';

export default createGlobalStyle`
   *{
      margin: 0;
      padding:0;
      outline: 0;
      box-sizing: border-box;
   }
   body{
      background: ${grey};
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
`;
