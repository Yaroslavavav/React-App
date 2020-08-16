import React from "react";
import "./app-header.scss";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        Почему мы?
      </Link>
      <Link to="/rooms" className="header__link">
        Комнаты
      </Link>
      <Link to="/feedback" className="header__link">
        Отзывы
      </Link>
      <Link to="/our-location" className="header__link">
        Как нас найти
      </Link>
    </header>
  );
};

export default AppHeader;
