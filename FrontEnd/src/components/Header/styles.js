import styled from 'styled-components';

import { yellow, grey_black } from '~/styles/colors';

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

      a {
         display: flex;
         margin-right: 25px;
      }

      form {
         div {
            display: flex;
            align-content: center;

            input {
               padding: 8px 15px;
               border: none;
               border-radius: 5px;
               font-size: 18px;
               width: 80%;
               color: ${grey_black};
            }

            button {
               display: flex;
               position: relative;
               left: -40px;
               width: 40px;
               padding: auto;
               border: none;
               border-top-right-radius: 5px;
               border-bottom-right-radius: 5px;

               img {
                  margin: auto;
               }
            }
         }
      }
   }
`;
