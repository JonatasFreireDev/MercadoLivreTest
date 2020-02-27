import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Navigation({ paths }) {
   const pathLink = paths.map((path, index) => (
      <span key={path}>
         <a href="/">{path}</a>
         {index === paths.length - 1 ? '' : <MdKeyboardArrowRight />}
      </span>
   ));

   return <Container>{pathLink}</Container>;
}

Navigation.propTypes = {
   paths: PropTypes.instanceOf(Array),
};

Navigation.defaultProps = {
   paths: [''],
};
