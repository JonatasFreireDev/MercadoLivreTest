import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';

import { Container, ListFavorite, Favorite, Price, NoFavorite } from './styles';

export default function Search() {
   const hearts = useSelector(state => state.favorites);

   function renderPrice(value, type = '$') {
      return (
         <Price>
            <span>
               {type} {value.toLocaleString('pt-BR')}
            </span>
            <small>00</small>
         </Price>
      );
   }

   function renderItemFavorites(f) {
      return (
         <>
            <img src={f.item.picture} alt={f.id} />
            <Link to={`/items/${f.id}`}>
               <p>{f.item.title}</p>
            </Link>
            {renderPrice(f.item.price.decimals)}
         </>
      );
   }

   function RenderListFavorite() {
      return (
         <ListFavorite>
            <p>Favoritos</p>
            {hearts.length >= 1 ? (
               <Slider
                  dots
                  infinite
                  speed={500}
                  slidesToShow={hearts.length <= 3 ? hearts.length : 3}
                  slidesToScroll={3}
                  responsive={[
                     {
                        breakpoint: 800,
                        settings: {
                           slidesToShow: 1,
                           slidesToScroll: 1,
                        },
                     },
                  ]}
               >
                  {hearts.map(heart => (
                     <Favorite key={heart.id}>
                        {renderItemFavorites(heart)}
                     </Favorite>
                  ))}
               </Slider>
            ) : (
               <NoFavorite>
                  <p>Adicione algum item !</p>
                  <MdFavoriteBorder size={50} />
               </NoFavorite>
            )}
         </ListFavorite>
      );
   }

   return (
      <MainContainer>
         <Navigation paths={['Home']} />
         <Container>
            <RenderListFavorite />
         </Container>
      </MainContainer>
   );
}
