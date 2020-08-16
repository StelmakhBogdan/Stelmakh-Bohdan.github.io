import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

import './header.css';
import logo from '../../img/logo/logo.jpg';
import Home from '../../pages/home';
import Portfolio from '../../pages/portfolio';
import Projects from '../../pages/projects';
import About from '../../pages/about';

const Header = () => {
  return (
    <Router>
      <FixedNavBar>
        <NavBar>
          <LeftSideNavBar>
            <Link to="/" className="link">
              <i className="fa fa-home" aria-hidden="true"/>
              Home
            </Link>
            <Link to="/portfolio" className="link">
              <i className="fa fa-picture-o" aria-hidden="true"/>
              Portfolio
            </Link>
          </LeftSideNavBar>
          <Link to="/">
            <img
              src={logo}
              height="95"
              width="180"
              alt="Logo"
            />
          </Link>
          <RightSideNavBar>
            <Link to="/projects" className="link">
              <i className="fa fa-shopping-bag" aria-hidden="true"/>
              Projects
            </Link>
            <Link to="/about" className="link">
              <i className="fa fa-id-card-o" aria-hidden="true"/>
              About
            </Link>
          </RightSideNavBar>
        </NavBar>
        <Hr/>
      </FixedNavBar>

      <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/portfolio" component={Portfolio} />
          <Route  path="/projects" component={Projects} />
          <Route  path="/about" component={About} />
      </Switch>
    </Router>
  )
};

export default Header;

const FixedNavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: white;
`;

const NavBar = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
`;

const LeftSideNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSideNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hr = styled.hr`
  margin: 0px;
  height: 8px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
`;