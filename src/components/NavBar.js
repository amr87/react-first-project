import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  setTimeout(() => {
    props.history.push('/'); // Programmatic Redirect
  }, 5000);
  return (
    <nav className="nav-wrapper red draken-3">
      <div className="container">
        <span className="brand-logo">Poke'Times</span>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar); // Higher Order Components which give route functionality to NavBar component.
