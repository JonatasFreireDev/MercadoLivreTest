import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Navigation({ paths }) {
   const pathLink = paths.map((path, index) => (
      <>
         <a href="/" key={path}>
            {path}
         </a>
         {index === paths.length - 1 ? '' : <MdKeyboardArrowRight />}
      </>
   ));

   return <Container>{pathLink}</Container>;
}

Navigation.propTypes = {
   paths: PropTypes.instanceOf(Array),
};

Navigation.defaultProps = {
   paths: [''],
};
