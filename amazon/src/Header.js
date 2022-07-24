import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://cdn.kibrispdr.org/data/4/amazon-logo-white-png-17.png"
          />
        </Link>
        <div className="header__searchDiv">
          <input type="test" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__loginDiv">
              <span className="header__optionLineOne">hello sree</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__ordersDiv">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__cartDiv">
              <ShoppingCartOutlinedIcon />
              <span className="header__cartNumber">0</span>
              <span className="header__optionLineTwo">Cart</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
