export function formatPrice(number, currency) {
   return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
   }).format(number);
}
