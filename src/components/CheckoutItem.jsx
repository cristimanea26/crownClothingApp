import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item">
      <div
        className="checkout-item-icon"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="checkout-item-container">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <div className="value">
            <h1>{quantity}</h1>
          </div>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </div>
        <div className="price">
          <h1>{price}</h1>
        </div>
        <div className="remove" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
