import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '~/assets/Logo_ML.png';
import Search from '~/assets/ic_Search.png';

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
                  <button>
                     <img src={Search} alt="Search" />
                  </button>
               </div>
            </form>
         </nav>
      </Container>
   );
}
