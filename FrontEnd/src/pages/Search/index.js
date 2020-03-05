import React from 'react';
import { MdFavoriteBorder, MdInsertEmoticon } from 'react-icons/md';
import { useSelector } from 'react-redux';

import List from '~/components/List';
import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';

import { Container, EmptyList } from './styles';

export default function Search() {
   const favorites = useSelector(state => state.favorites);
   const visits = useSelector(state => state.visits);

   function ShowEmptyVisits() {
      return (
         <EmptyList>
            <p>Visualize os produtos para adicionar aqui !</p>
            <MdInsertEmoticon size={50} />
         </EmptyList>
      );
   }

   function ShowEmptyFavorite() {
      return (
         <EmptyList>
            <p>Adicione algum item aos favoritos!</p>
            <MdFavoriteBorder size={50} />
         </EmptyList>
      );
   }

   return (
      <MainContainer>
         <Navigation paths={['Home']} />
         <Container>
            <hr />
            <List
               items={visits}
               nameList="Mais Visitados"
               emptyMessage={<ShowEmptyVisits />}
            />
            <hr />
            <List
               items={favorites}
               nameList="Favoritos"
               emptyMessage={<ShowEmptyFavorite />}
            />
         </Container>
      </MainContainer>
   );
}
