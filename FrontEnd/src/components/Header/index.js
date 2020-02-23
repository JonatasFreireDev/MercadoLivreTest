import React from 'react';
import { Link } from 'react-router-dom';

import search from '~/assets/ic_Search.png';
import Logo from '~/assets/Logo_ML.png';

import { Container } from './styles';

export default function Header() {
   return (
      <Container>
         <nav>
            <Link to="/">
               <img src={Logo} alt="Search" />
            </Link>
            <form>
               <div>
                  <input type="text" placeholder="Buscar..." />
                  <button type="button">
                     <img src={search} alt="Search" />
                  </button>
               </div>
            </form>
         </nav>
      </Container>
   );
}
