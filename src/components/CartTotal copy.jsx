import { useSelector } from 'react-redux';
import Title from './Title';

const CartTotal = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.product.items);
  const currency = "Rs.";

  const subtotal = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p._id === id);
    if (!product) return acc;

    const sizes = cartItems[id];
    const totalForProduct = Object.keys(sizes).reduce((sum, size) => {
      return sum + (sizes[size] * product.price);
    }, 0);

    return acc + totalForProduct;
  }, 0);

  const shipping = subtotal > 10000 ? 0 : 250;
  const total = subtotal

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Discount</p>
          <p>{currency} {0}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>{shipping === 0 ? "Free" : `${currency} ${shipping}`}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {subtotal === 0 ? 0 : total}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
