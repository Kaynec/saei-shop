export function calculateDiscountPercentage(price: string, off_price: string) {
  return 100 - parseInt(price) / parseInt(off_price);
}
