import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import ErrorMessage from '~/components/ErrorMessage';
import Loading from '~/components/Loading';
import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';
import api from '~/services/api';
import * as FavoriteActions from '~/store/modules/favorites/actions';
import * as VisitsActions from '~/store/modules/visits/actions';

import { Container, Detail, Buy, Price, Icon } from './styles';

export default function ProductDetail({ match }) {
   const [product, setProduct] = useState();
   const [isloading, setIsLoading] = useState(true);
   const [failure, setFailure] = useState({ status: false, message: '' });
   const dispatch = useDispatch();

   const fav = useSelector(state =>
      state.favorites.find(p => {
         if (product) {
            return p.id === product.id;
         }
         return null;
      })
   );

   useEffect(() => {
      const { id } = match.params;

      async function loadProduct() {
         window.scrollTo(0, 0);

         try {
            const resp = await api.get(`/items/${id}`).catch(() => {
               throw new Error('Produto não encontrado');
            });

            const { author, item } = resp.data;

            setProduct({ id, author, item });
            dispatch(VisitsActions.addRequestVisit(id));

            setIsLoading(false);
         } catch (err) {
            setFailure({ status: true, message: err.message });
            setIsLoading(false);
         }
      }

      loadProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   function handleToggleFavorite(id) {
      dispatch(FavoriteActions.addRequestFavorite(id));
   }

   const mainPath = useMemo(() => {
      if (product) {
         return [...product.item.path];
      }
      return ['Buscando...'];
   }, [product]);

   function renderError() {
      return <ErrorMessage message={failure.message} />;
   }

   function renderLoading() {
      return <Loading />;
   }

   function renderPrice(value, type = '$') {
      return (
         <Price>
            <span>{type}</span>
            {value.toLocaleString('pt-BR')}
            <small>00</small>
         </Price>
      );
   }

   function renderProduct(p) {
      return (
         <>
            <Detail>
               <img src={p.item.picture} alt={p.item.title} />
               <section>
                  <strong>Detalhes do Produto</strong>
                  <p>{p.item.description}</p>
               </section>
            </Detail>
            <Buy>
               <div>
                  <small>
                     {p.item.condition} - {p.item.sold_quantity} vendidos
                  </small>
                  <Icon
                     onClick={() => {
                        handleToggleFavorite(p.id);
                     }}
                     favorite={fav ? 'true' : undefined}
                  />
               </div>
               <strong>{p.item.title}</strong>
               {renderPrice(p.item.price.decimals)}
               <button type="button">Comprar</button>
            </Buy>
         </>
      );
   }

   return (
      <MainContainer>
         <Navigation paths={mainPath} />
         <Container>
            {failure.status
               ? renderError()
               : isloading
               ? renderLoading()
               : renderProduct(product)}
         </Container>
      </MainContainer>
   );
}

ProductDetail.propTypes = {
   match: PropTypes.shape({
      params: PropTypes.shape({
         id: PropTypes.string.isRequired,
      }),
   }),
};
