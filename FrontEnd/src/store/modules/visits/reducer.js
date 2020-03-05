import produce from 'immer';

const INIT_STATE = [];

export default function favorites(state = INIT_STATE, action) {
   return produce(state, draft => {
      switch (action.type) {
         case '@visits/ADD_VISITS_SUCCESS': {
            const { product } = action.payload;

            if (draft.length >= 9) {
               draft.pop();
            }

            draft.unshift(product);
            break;
         }

         case '@visits/UPDATE_VISITS_SUCCESS': {
            const { product, visits } = action.payload;

            const productIndex = draft.findIndex(p => p.id === product.id);

            if (productIndex >= 0) {
               draft.splice(productIndex, 1);
               draft.unshift({ ...product, visits });
            }

            break;
         }

         case '@visits/REMOVE_VISITS_REQUEST': {
            const { index } = action.payload;
            draft.splice(index, 1);
            break;
         }

         default:
      }
   });
}
