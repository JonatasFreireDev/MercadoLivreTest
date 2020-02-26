import { darken } from 'polished';
import styled from 'styled-components';

import { white, blue, grey } from '~/styles/colors';

export const Container = styled.div`
   min-width: 200px;
   display: flex;
   background: ${white};
   flex-direction: row;
   margin-bottom: 50px;
   border-radius: 4px;

   @media (max-width: 600px) {
      flex-direction: column;
   }
`;

export const Detail = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 70%;
   order: 1;

   @media (max-width: 600px) {
      width: 100%;
   }

   img {
      border-top-left-radius: 4px;
      padding: 15px;
      width: 100%;
      max-width: 400px;

      @media (max-width: 600px) {
         padding: 5px;
         width: 80%;
      }
   }

   section {
      margin: 32px 0;
      padding-left: 32px;

      @media (max-width: 600px) {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin: 0;
         width: 100%;
         padding: 20px;
      }

      strong {
         font-size: 28px;
      }

      p {
         color: ${grey};
         font-size: 16px;
         padding: 32px 0;
      }
   }
`;

export const Buy = styled.div`
   order: 2;
   display: flex;
   flex-direction: column;
   width: 30%;
   margin-right: 32px;
   margin-top: 32px;

   @media (max-width: 600px) {
      margin: auto;
      width: 100%;
      padding: 15px;
      text-align: center;
   }

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

export const Price = styled.p`
   align-items: center;

   span {
      margin-right: 10px;
   }

   small {
      font-weight: bold;
   }
`;
