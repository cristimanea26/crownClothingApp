import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-container">
      <div className="category-title">
        <Link to={title}>{title}</Link>
      </div>
      <div className="category-list">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
