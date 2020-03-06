import styled from 'styled-components';

import { grey } from '~/styles/colors';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ListItems = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-bottom: 50px;
   width: 100%;

   & > p {
      margin: 10px;
      font-weight: bold;
      font-size: 18px;
   }

   & > div {
      width: 90%;

      @media (max-width: 600px) {
         width: 80%;
      }

      & > button,
      & > button:focus,
      & > button:active,
      & > button:before,
      & > button:hover {
         border-radius: 100%;
         color: black;
      }
   }
`;

export const Item = styled.div`
   display: flex !important;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 350px;
   transition: all 0.3s;

   &:hover {
      transform: scale(1.05);
   }

   img {
      max-width: 200px;
      max-height: 200px;
      margin: auto;
   }

   p {
      font-weight: bold;
      margin: 15px;
      min-height: 40px;
   }
`;

export const Price = styled.p`
   margin: 0px !important;

   span {
      font-size: 18px;
      margin-right: 2px;
   }

   small {
      font-size: 14px;
      color: ${grey};
      font-weight: bold;
   }
`;

export const NoItem = styled.div`
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
