import styled, { keyframes } from 'styled-components';

import { grey } from '~/styles/colors';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
   margin: auto;
   height: 80vh;
   color: ${grey};
   font-size: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20%;
   min-width: 100% !important;

   svg {
      animation: ${rotate} 1s linear infinite;
   }
`;

export default Loader;
