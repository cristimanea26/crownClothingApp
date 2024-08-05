import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item" onClick={onNavigateHandler}>
      <div
        className="directory-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-item-container">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
