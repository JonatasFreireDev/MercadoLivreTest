import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';

import List from '~/components/List';
import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';

import { Container, NoFavorite } from './styles';

export default function Search() {
   const hearts = useSelector(state => state.favorites);

   function ShowEmpty() {
      return (
         <NoFavorite>
            <p>Adicione algum item !</p>
            <MdFavoriteBorder size={50} />
         </NoFavorite>
      );
   }

   return (
      <MainContainer>
         <Navigation paths={['Home']} />
         <Container>
            <List
               items={hearts}
               nameList="Favoritos"
               emptyMessage={<ShowEmpty />}
            />
         </Container>
      </MainContainer>
   );
}
