import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import Loader from './styles';

export default function Loading() {
   return (
      <Loader>
         <FaSpinner />
      </Loader>
   );
}
