// format the price to the colombian currency
export const formatPrice = (price: number): string => {
  return price.toLocaleString('es-CO', {
    style: 'currency', currency: 'COP',
    minimumFractionDigits: 0
  });
}