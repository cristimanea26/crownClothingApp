import { useContext } from "react";
import CartLogo from "../assets/images/shopping-bag.svg?react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart" onClick={toggleIsCartOpen}>
      <CartLogo className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
