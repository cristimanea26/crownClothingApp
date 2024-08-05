import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Cart from "../components/Cart";
import CartDropDown from "../components/CartDropDown";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import CrownLogo from "../assets/images/crown.svg?react";
import { signOutUser } from "../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="navigation">
      <div className="navigation-container">
        <div className="logo">
          <Link className="logo-link" to="/">
            <CrownLogo className="logo-icon" />
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/shop">
            <span>Shop</span>
          </Link>
          {currentUser ? (
            <a className="nav-link" onClick={signOutUser}>
              <span>Sign out</span>
            </a>
          ) : (
            <Link className="nav-link" to="/auth">
              <span>Sign in</span>
            </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
