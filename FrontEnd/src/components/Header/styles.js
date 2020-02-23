import { darken } from 'polished';
import styled from 'styled-components';

import { yellow, grey_black, grey_light } from '~/styles/colors';

export const Container = styled.div`
   background: ${yellow};
   width: 100vw;
   height: 60px;

   nav {
      display: flex;
      margin: auto;
      height: 100%;
      max-width: 1020px;
      align-items: center;
      padding: 0 20px;

      a {
         display: flex;
         margin-right: 30px;
      }

      form {
         width: 100%;
         div {
            width: 100%;
            display: flex;
            align-content: center;

            input {
               width: 100%;
               padding: 8px 15px;
               border: none;
               border-radius: 5px;
               font-size: 18px;
               color: ${grey_black};
            }

            button {
               display: flex;
               position: relative;
               left: -10px;
               width: 45px;
               padding: auto;
               border: none;
               border-top-right-radius: 5px;
               border-bottom-right-radius: 5px;
               transition: background 0.2s;

               :hover {
                  background: ${darken(0.03, grey_light)};
               }

               img {
                  margin: auto;
               }
            }
         }
      }
   }
`;
