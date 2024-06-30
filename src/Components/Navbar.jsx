import React, { useContext } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { RiShoppingBag4Line , RiUser3Line, RiSearch2Line} from "react-icons/ri";

function Navbar() {
  const { cart } = useContext(CartContext);

  const cartTotalItems = cart.reduce((acc , cartItem) => acc + cartItem.quantity , 0)
  const { openSubMenu, closeSubMenu, setIsSearch } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  const handleMouseOver = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubMenu();
    }
  };
  return (
    <div className="navbar-container" onMouseOver={handleMouseOver}>
      <RxHamburgerMenu className="hamburger-menu" />
      <h1 className="logo">
        <Link to="/"> bookoria</Link>
      </h1>

      <ul className="nav-links">
        <li>
          <Link to="/category/New Arrivals"> New Arrivals</Link>
        </li>
        <li>
          {" "}
          <Link to="/category/Best Sellers"> Best Sellers </Link>
        </li>
        <li
          className="link-btn show-hover-dropdown"
          onMouseOver={displaySubmenu}
        >
          Fiction
        </li>
        <li className="link-btn " onMouseOver={displaySubmenu}>
          Non-fiction
        </li>
      </ul>

      <ul className="icon-links">
        <li onClick={() => setIsSearch(true)}>
          <RiSearch2Line />
        </li>
        <li>
          <RiUser3Line />
        </li>
        <li>
          {/* <Link to="/cart">  <CiShoppingCart /> </Link> */}
          <Link to="/cart">
            {" "}
            <RiShoppingBag4Line />
          </Link>
        </li>
        {cartTotalItems > 0 && <span className="cart-number">{cartTotalItems}</span> } 
      </ul>
    </div>
  );
}

export default Navbar;
