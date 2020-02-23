import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './styles';

const paths = ['Eletronica', 'Ipod', 'Repro', 'Ipod Touch', '32 gb'];

export default function Navigation() {
   const pathLink = paths.map((path, index) => (
      <>
         <a href="#">{path}</a>
         {index === paths.length - 1 ? '' : <MdKeyboardArrowRight />}
      </>
   ));

   return <Container>{pathLink}</Container>;
}
