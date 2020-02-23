import React from 'react';

import shipping from '~/assets/ic_shipping@2x.png.png';
import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';

import { Container, Product, Description } from './styles';

const products = [
   {
      image: 'https://api.adorable.io/avatars/103/abott@adorable.png',
      price: 1023,
      description:
         'Some text Some text Some text Some text Some text Some text ',
      local: 'Capital federal',
   },
   {
      image: 'https://api.adorable.io/avatars/103/abott@adorable.png',
      price: 101321,
      description:
         'Some text Some text Some text Some text Some text Some text ',
      local: 'Capital federal',
   },
   {
      image: 'https://api.adorable.io/avatars/103/abott@adorable.png',
      price: 136,
      description:
         'Some text Some text Some text Some text Some text Some text Some text Some text ',
      local: 'Capital ',
   },
   {
      image: 'https://api.adorable.io/avatars/103/abott@adorable.png',
      price: 136,
      description:
         'Some text Some text Some text Some text Some text Some text Some text Some text ',
      local: 'Capital ',
   },
   {
      image: 'https://api.adorable.io/avatars/103/abott@adorable.png',
      price: 136,
      description:
         'Some text Some text Some text Some text Some text Some text Some text Some text ',
      local: 'Capital ',
   },
];

export default function ResultsSearch() {
   return (
      <MainContainer>
         <Navigation />
         <Container>
            {products.map((product, index) => (
               <>
                  <Product href="aew">
                     <img src={product.image} alt={product.local} />
                     <div>
                        <div>
                           <span>{product.price}</span>
                           <img src={shipping} />
                        </div>
                        <Description>{product.description}</Description>
                     </div>
                     <small>{product.local}</small>
                  </Product>
                  {index === products.length - 1 ? '' : <hr />}
               </>
            ))}
         </Container>
      </MainContainer>
   );
}
