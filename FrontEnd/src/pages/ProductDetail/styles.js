import { darken } from 'polished';
import styled from 'styled-components';

import { white, blue, grey } from '~/styles/colors';

export const Container = styled.div`
   display: flex;
   background: ${white};
   flex-direction: row;
   margin-bottom: 50px;
   border-radius: 4px;

   div {
      max-width: 680px;

      img {
         border-top-left-radius: 4px;
         width: 680px;
         height: 680px;

         @media (max-width: 800px) {
            width: 40vw;
            height: 40vh;
         }
      }

      section {
         margin: 32px 0;
         padding-left: 32px;

         strong {
            font-size: 28px;
         }

         p {
            color: ${grey};
            font-size: 16px;
            padding: 32px 0;
         }
      }
   }
`;

export const Buy = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 32px;
   margin-top: 32px;

   small {
      font-size: 14px;
      margin-bottom: 16px;
      color: ${grey};
   }
   strong {
      font-weight: bold;
      font-size: 24px;
   }
   p {
      margin: 32px 0;
      font-size: 46px;
   }
   button {
      width: 100%;
      padding: 15px;
      background: ${blue};
      color: ${white};
      border: none;
      border-radius: 4px;

      &:hover {
         background: ${darken(0.03, blue)};
      }
   }
`;
