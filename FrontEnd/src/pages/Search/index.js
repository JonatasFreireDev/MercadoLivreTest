import React, { useState, useEffect } from 'react';
import { MdFavoriteBorder, MdInsertEmoticon } from 'react-icons/md';
import { useSelector } from 'react-redux';

import List from '~/components/List';
import { MainContainer } from '~/components/MainContainer/styles';
import MainList from '~/components/MainList';
import Navigation from '~/components/Navigation';
import api from '~/services/api';

import { Container, EmptyList } from './styles';

export default function Search() {
   const [products, setProducts] = useState();
   const favorites = useSelector(state => state.favorites);
   const visits = useSelector(state => state.visits);

   useEffect(() => {
      async function loadProduct(busca) {
         const resp = await api
            .get(`/items?search=${busca}&random=true`)
            .catch(() => {
               throw new Error('Não foi encontrado nenhum produto');
            });

         const [...searchs] = resp.data;

         setProducts(searchs);
      }

      if (visits.length > 0) {
         loadProduct(visits[0].item.title);
      } else {
         loadProduct('query');
      }
   }, [visits]);

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
            <MainList items={products} />
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
