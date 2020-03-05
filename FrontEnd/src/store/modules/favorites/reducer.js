import produce from 'immer';

const INIT_STATE = [];

export default function favorites(state = INIT_STATE, action) {
   return produce(state, draft => {
      switch (action.type) {
         case '@favorite/ADD_FAVORITE_SUCCESS': {
            const { product } = action.payload;
            draft.unshift(product);
            break;
         }
         case '@favorite/REMOVE_FAVORITE_REQUEST': {
            const { index } = action.payload;
            draft.splice(index, 1);
            break;
         }
         default:
      }
   });
}
