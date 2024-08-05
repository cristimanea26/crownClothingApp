import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";

const Shop = () => {
  return (
    <div className="shop">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
