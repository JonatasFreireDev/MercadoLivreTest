import { darken } from 'polished';
import styled from 'styled-components';

import { grey } from '~/styles/colors';

export const Container = styled.div`
   display: flex;
   padding: 16px 0;
   align-items: center;
   color: ${grey};

   span {
      a {
         color: ${grey};
         text-decoration: none;
         margin: 0 5px;

         a:hover {
            background: ${darken(0.03, grey)};
         }

         &:last-child {
            font-weight: bold;
         }
      }
   }
`;
