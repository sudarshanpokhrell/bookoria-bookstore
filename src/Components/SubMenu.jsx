import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";

import "./SubMenu.css";
function SubMenu() {
  const { isSubMenuOpen, subMenuLocation, subMenu , closeSubMenu } = useGlobalContext();
  const categoryContainer = useRef(null);
  useEffect(() => {
    const category = categoryContainer.current;
    const { center, bottom } = subMenuLocation;
    category.style.left = `${center}px`;
    category.style.top = `${bottom}px`;
  });
  const hideSubmenu = ()=>{
    closeSubMenu();
  }

  return (
    <div
      className={`${isSubMenuOpen ? "sub-menu show show-hover-dropdown" : "sub-menu"} `}
      ref={categoryContainer}
      onMouseLeave ={hideSubmenu}
    >
      {subMenu.map((item, index) => {
        return (
          <Link  style={{textDecoration:"none"}} to={`/category/${item}`}>
            <p className="submenu-item" key={index}>
              {item}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default SubMenu;
