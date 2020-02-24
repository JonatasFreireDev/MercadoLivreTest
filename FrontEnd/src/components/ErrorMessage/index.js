import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

import PropTypes from 'prop-types';

import Container from './styles';

export default function ErrorMessage({ message }) {
   return (
      <Container>
         <MdErrorOutline size={80} />
         <p>Error</p>
         <span>{message}</span>
      </Container>
   );
}

ErrorMessage.propTypes = {
   message: PropTypes.string,
};

ErrorMessage.defaultProps = {
   message: 'There was a problem loading the page.',
};
