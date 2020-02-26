import React from 'react';

import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';

import { Container } from './styles';

export default function Search() {
   return (
      <MainContainer>
         <Navigation paths={['Home']} />
         <Container>
            <p>Bem vindo !</p>
         </Container>
      </MainContainer>
   );
}
