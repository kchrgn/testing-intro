function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity === 0) throw new RangeError;
  if (quantity > product.stock) throw new RangeError;
  const index = cart.findIndex((p) => p.id === product.id);
  if (index >= 0) {
    cart[index].quantity += quantity;;
  } else {
    cart.push({...product, quantity})
  }
  return cart;
}

function changeQuantity(cart, id, quantity) {
  if (quantity === 0) throw new RangeError;
  const product = cart.find((p) => p.id === id)
  if (!product) return cart;
  if (quantity > product.stock) throw new RangeError;
  product.quantity = quantity;
  return cart;
}

function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
