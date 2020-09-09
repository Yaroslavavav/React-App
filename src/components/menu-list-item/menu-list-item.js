import React from "react";
import { Link } from "react-router-dom";
import "./menu-list-item.scss";

const MenuListItem = ({}) => {
  return (
    <>
      <li className="menu__item">
        <div className="menu__title">Test title</div>
        {/* <img className="menu__img" src={url} alt={title}></img> */}
        <div className="menu__category">
          Category: <span>test</span>
        </div>
        <div className="menu__price">
          Price: <span>price $</span>
        </div>
        <button className="menu__btn">Add to cart</button>
        <span className={`menu__category_Img`}></span>
      </li>
    </>
  );
};

export default MenuListItem;
