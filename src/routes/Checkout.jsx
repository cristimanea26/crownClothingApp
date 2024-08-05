import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout-title">
        <div className="checkout-title-inner">
          <span>Product</span>
        </div>
        <div className="checkout-title-inner">
          <span>Description</span>
        </div>
        <div className="checkout-title-inner">
          <span>Quantity</span>
        </div>
        <div className="checkout-title-inner">
          <span>Price</span>
        </div>
        <div className="checkout-title-inner">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-list">
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <div className="checkout-total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
