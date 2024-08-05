import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product">
      <div
        className="product-icon"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="product-container">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
