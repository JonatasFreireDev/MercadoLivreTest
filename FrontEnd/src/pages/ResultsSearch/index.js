import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import shipping from '~/assets/ic_shipping@2x.png.png';
import ErrorMessage from '~/components/ErrorMessage';
import Loading from '~/components/Loading';
import { MainContainer } from '~/components/MainContainer/styles';
import Navigation from '~/components/Navigation';
import api from '~/services/api';

import { Container, Product, Description, Pagination } from './styles';

export default function ResultsSearch() {
   const [products, setProducts] = useState([]);
   const [isloading, setIsLoading] = useState(true);
   const [failure, setFailure] = useState({ status: false, message: '' });
   const [page, setPage] = useState(0);

   const URL = new URLSearchParams(useLocation().search).get('search');

   useEffect(() => {
      setIsLoading(true);

      async function loadProduct() {
         try {
            const resp = await api
               .get(`/items?search=${URL}&page=${page}`)
               .catch(() => {
                  throw new Error('Não foi encontrado nenhum produto');
               });

            const [...searchs] = resp.data;

            setProducts(searchs);
            setIsLoading(false);
         } catch (err) {
            setFailure({ status: true, message: err.message });
            setIsLoading(false);
         }
      }

      loadProduct();
   }, [URL, page]);

   function renderError() {
      return <ErrorMessage message={failure.message} />;
   }

   function renderLoading() {
      return <Loading />;
   }

   function renderSearch(product, index) {
      return (
         <>
            <Product>
               <img src={product.picture} alt={product.id} />
               <div>
                  <div>
                     <span>
                        $ {product.price.decimals.toLocaleString('pt-BR')}
                     </span>
                     {product.free_shiping ? (
                        <img src={shipping} alt={product.id} />
                     ) : (
                        ''
                     )}
                  </div>
                  <Description>{product.title}</Description>
               </div>
               <small>{product.city}</small>
            </Product>
            {index === products.length - 1 ? '' : <hr />}
         </>
      );
   }

   return (
      <MainContainer>
         <Navigation paths={['Busca']} />
         <Container>
            {failure.status
               ? renderError()
               : isloading
               ? renderLoading()
               : products.map((product, index) => (
                    <Link key={product.id} to={`/items/${product.id}`}>
                       {renderSearch(product, index)}
                    </Link>
                 ))}
            {!failure.status ? (
               <Pagination>
                  <button
                     type="button"
                     onClick={() => {
                        window.scrollTo(0, 0);
                        setPage(page - 1);
                     }}
                     disabled={page <= 0 || isloading}
                  >
                     Anterior
                  </button>
                  <span>{page + 1}</span>
                  <button
                     type="button"
                     onClick={() => {
                        window.scrollTo(0, 0);
                        setPage(page + 1);
                     }}
                     disabled={isloading}
                  >
                     Próximo
                  </button>
               </Pagination>
            ) : (
               ``
            )}
         </Container>
      </MainContainer>
   );
}
