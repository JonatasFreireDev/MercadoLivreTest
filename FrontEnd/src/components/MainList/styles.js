import Slider from 'react-slick';

import styled from 'styled-components';

import { yellow } from '~/styles/colors';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const List = styled(Slider)`
   margin-bottom: 50px;
   width: 100%;
   height: 500px;
   border: none;
   box-shadow: 0px 10px 11px -13px rgba(0, 0, 0, 0.75);

   & > button,
   & > button:focus,
   & > button:active,
   & > button:before,
   & > button:hover {
      margin: auto;
      width: 95px;
      z-index: 1;
      border-radius: 100%;
      color: black;
   }

   div {
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 100%;
   }

   ul {
      bottom: 25px;
   }
`;

export const Item = styled.div`
   display: flex !important;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   text-align: center;
   background: ${yellow};

   @media (max-width: 800px) {
      flex-direction: column;
   }

   & > div {
      display: flex !important;
      justify-content: center;
      border-radius: 10px;
      background: white;
      max-width: 350px;
      height: 350px;
      box-shadow: inset 0px 0px 23px -8px rgba(0, 0, 0, 0.75);

      @media (max-width: 600px) {
         max-width: 250px;
      }

      img {
         padding: 20px;
         width: 100%;
         max-height: 100%;
         margin: auto;
      }
   }

   section {
      width: 250px;

      p {
         font-weight: bold;
         margin: 15px;
         min-height: 40px;
      }
   }
`;

export const Intro = styled.div`
   @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap');
   display: flex !important;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   background: ${yellow};
   margin: auto;

   img {
      margin: 0;
      max-width: 300px;
      max-height: 300px;
   }

   span {
      font-family: 'Shadows Into Light', cursive;
      margin: 20px;
      font-size: 20px;
      text-shadow: 1px 2px 5px rgba(150, 150, 150, 1);
   }

   p {
      font-family: 'Shadows Into Light', cursive;
      font-size: 20px;
      text-shadow: 1px 2px 5px rgba(150, 150, 150, 1);

      @media (max-width: 800px) {
         max-width: 200px;
      }
   }
`;
