import styled from 'styled-components';

import { white } from '~/styles/colors';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: ${white};
   border-radius: 4px;
   margin-bottom: 50px;

   hr {
      margin-bottom: 20px;
      width: 100%;
      height: 2px;
      border: 0;
      background: linear-gradient(to right, transparent, #ccc, transparent);
   }
`;

export const EmptyList = styled.div`
   display: flex !important;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 200px;

   p {
      margin: 20px;
   }

   svg {
      color: red;
   }
`;
