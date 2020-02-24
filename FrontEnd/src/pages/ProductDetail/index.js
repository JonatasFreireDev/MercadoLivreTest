import React from 'react';

import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';

import { Container, Buy } from './styles';

const products = {
   id: 0,
   image: 'https://api.adorable.io/avatars/103/abott@adorable.png',
   price: 1023,
   description:
      'Some text Some text Sasdome text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text ',
   local: 'Capital federal',
};

export default function ProductDetail() {
   return (
      <MainContainer>
         <Navigation />
         <Container>
            <div>
               <img src={products.image} alt={products.description} />
               <section>
                  <strong>Detalhes do Produto</strong>
                  <p>{products.description}</p>
               </section>
            </div>
            <Buy>
               <small>novo - 123 vendidos</small>
               <strong>Deco Reverse Sombrero Oxford</strong>
               <p>1980</p>
               <button type="button">Comprar</button>
            </Buy>
         </Container>
      </MainContainer>
   );
}
