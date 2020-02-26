import styled from 'styled-components';

import { white } from '~/styles/colors';

export const Container = styled.div`
   min-height: 60vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${white};
   border-radius: 4px;
   margin-bottom: 50px;

   p {
      padding: 20px;
   }
`;
