const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="cart-item">
      <div
        className="cart-item-icon"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="cart-item-container">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
