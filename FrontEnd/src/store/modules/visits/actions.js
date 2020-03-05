export function addRequestVisit(id) {
   return {
      type: '@visits/ADD_VISITS_REQUEST',
      payload: { id },
   };
}

export function addSuccessVisit(product) {
   return {
      type: '@visits/ADD_VISITS_SUCCESS',
      payload: { product },
   };
}

export function updateVisitSuccess(product, visits) {
   return {
      type: '@visits/UPDATE_VISITS_SUCCESS',
      payload: { product, visits },
   };
}
