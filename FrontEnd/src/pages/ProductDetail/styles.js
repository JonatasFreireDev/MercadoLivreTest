import { MdFavorite } from 'react-icons/md';

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

   @media (max-width: 780px) {
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

   @media (max-width: 780px) {
      width: 100%;
   }

   img {
      border-top-left-radius: 4px;
      padding: 15px;
      width: 100%;
      max-width: 400px;

      @media (max-width: 780px) {
         padding: 5px;
         width: 80%;
      }
   }

   section {
      width: 100%;
      margin: 32px auto;
      padding-left: 32px;

      @media (max-width: 780px) {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin: 0;
         width: 100% !important;
         padding: 20px;
      }

      strong {
         font-size: 28px;
      }

      p {
         width: 100%;
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

   @media (max-width: 780px) {
      margin: auto;
      width: 100%;
      padding: 15px;
      text-align: center;
   }

   div {
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-bottom: 10px;

      small {
         font-size: 14px;
         color: ${grey};
      }
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

export const Icon = styled(MdFavorite)`
   color: ${props => (props.favorite ? 'red' : 'grey')};
   width: 25px;
   height: 25px;

   &:hover {
      cursor: pointer;
   }
`;

export const Price = styled.p`
   span {
      margin-right: 10px;
   }

   small {
      font-size: 14px;
      color: ${grey};
      font-weight: bold;
   }
`;
