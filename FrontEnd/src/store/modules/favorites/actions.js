export function addRequestFavorite(id) {
   return {
      type: '@favorite/ADD_FAVORITE_REQUEST',
      payload: { id },
   };
}

export function addSuccessFavorite(product) {
   return {
      type: '@favorite/ADD_FAVORITE_SUCCESS',
      payload: { product },
   };
}

export function removeFavorite(index) {
   return {
      type: '@favorite/REMOVE_FAVORITE_REQUEST',
      payload: { index },
   };
}
