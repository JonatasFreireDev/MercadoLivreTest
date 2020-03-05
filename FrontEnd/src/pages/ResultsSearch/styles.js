import styled from 'styled-components';

import { white, grey } from '~/styles/colors';

export const Container = styled.div`
   background: ${white};
   border-radius: 4px;
   margin-bottom: 50px;
`;

export const Product = styled.div`
   display: flex;
   padding: 16px;
   transition: all 0.2s;

   @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   &:hover {
      transform: scale(1.02);
   }

   img {
      width: 180px;
      height: 180px;
      border-radius: 4px;
   }

   div {
      display: flex;
      flex-direction: column;
      margin: 16px;
      width: 60%;

      div {
         flex-direction: row;
         padding: 0px;
         margin: 0px;

         @media (max-width: 600px) {
            justify-content: center;
            align-items: center;
            width: 100%;
         }
         span {
            font-size: 24px;
         }

         img {
            margin: 0 10px;
            width: 25px;
            height: 25px;
         }
      }
   }

   small {
      font-size: 12px;
      margin-top: 33px;
      color: ${grey};
   }
`;

export const Description = styled.p`
   font-size: 18px;
   max-width: 350px;
   margin-top: 16px;
`;

export const Pagination = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 15px;

   button {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      color: #050505;
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px solid #949494;
      box-shadow: 0px 1px 3px rgba(000, 000, 000, 0.5),
         inset 0px 0px 2px rgba(255, 255, 255, 1);
      text-shadow: 0px -1px 0px rgba(000, 000, 000, 0.2),
         0px 1px 0px rgba(255, 255, 255, 1);

      &:disabled {
         cursor: not-allowed;
         opacity: 0.5;
      }
   }
`;
