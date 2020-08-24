import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './header.css';
import logo from '../../img/logo/logo.jpg';
import Home from '../../pages/home';
import Portfolio from '../../pages/portfolio';
import Projects from '../../pages/projects';
import About from '../../pages/about';
import {
  NavBarContainer,
  NavBar,
  LeftSideNavBar,
  RightSideNavBar,
  Hr
} from './styled';

const Header = () => {

  return (
    <Router>
      <NavBarContainer>
        <NavBar>
          <LeftSideNavBar>
            <Link to="/" className="link">
              <i className="fa fa-home" aria-hidden="true"/>
              HOME
            </Link>
            <Link to="/portfolio" className="link">
              <i className="fa fa-picture-o" aria-hidden="true"/>
              PORTFOLIO
            </Link>
          </LeftSideNavBar>
          <Link to="/">
            <img
              src={logo}
              height="100"
              width="200"
              alt="Logo"
            />
          </Link>
          <RightSideNavBar>
            <Link to="/projects" className="link">
              <i className="fa fa-shopping-bag" aria-hidden="true"/>
              PROJECTS
            </Link>
            <Link to="/about" className="link">
              <i className="fa fa-id-card-o" aria-hidden="true"/>
              ABOUT
            </Link>
          </RightSideNavBar>
        </NavBar>
        <Hr/>
      </NavBarContainer>

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