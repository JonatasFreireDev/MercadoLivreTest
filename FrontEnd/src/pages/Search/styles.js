import styled from 'styled-components';

import { white } from '~/styles/colors';

export const Container = styled.div`
   padding: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: ${white};
   border-radius: 4px;
   margin-bottom: 50px;
`;

export const NoFavorite = styled.div`
   display: flex !important;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;

   p {
      margin: 20px;
   }

   svg {
      color: red;
   }
`;
