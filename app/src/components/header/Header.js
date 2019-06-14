import React from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import './Header.css';

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <AppBar position="static" color="primary-light">
      <Toolbar>
        <nav>
          <NavLink to="/" exact>
            <span className="logo"/>
          </NavLink>
          <NavLink to="/battle" activeStyle={activeStyle}>
            Battle
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
