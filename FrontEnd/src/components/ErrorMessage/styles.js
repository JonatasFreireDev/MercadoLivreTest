import styled from 'styled-components';

import { grey } from '~/styles/colors';

const Container = styled.div`
   color: ${grey};
   font-size: 40px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 70vh;
   min-width: 100% !important;

   p {
      text-align: center;
   }

   span {
      margin-top: 10px;
      font-size: 16px;
   }
`;

export default Container;
