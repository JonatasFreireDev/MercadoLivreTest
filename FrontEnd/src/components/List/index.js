import React from 'react';
import { MdDoNotDisturb } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import PropTypes from 'prop-types';

import { ListItems, Item, Price, NoItem } from './styles';

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

function ShowEmpty() {
   return (
      <NoItem>
         <p>Lista Vazia</p>
         <MdDoNotDisturb size={50} />
      </NoItem>
   );
}

export default function RenderList({
   items = [],
   nameList = 'List',
   emptyMessage = ShowEmpty(),
}) {
   return (
      <ListItems>
         <p>{nameList}</p>
         {items.length >= 1 ? (
            <Slider
               dots
               infinite
               speed={500}
               slidesToShow={items.length <= 3 ? items.length : 3}
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
               {items.map(item => (
                  <Item key={item.id}>{renderItemFavorites(item)}</Item>
               ))}
            </Slider>
         ) : (
            emptyMessage
         )}
      </ListItems>
   );
}

RenderList.propTypes = {
   items: PropTypes.instanceOf(Array).isRequired,
   nameList: PropTypes.string,
   emptyMessage: PropTypes.func,
};
