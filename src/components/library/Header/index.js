import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <header className="header" >
          <div className="container" >
            <div className="header-wrap d-grid" >
              <div className="header-logo" >
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <nav>
                <ul className="menu" >
                  <li className="menu-item" >
                    <Link to="/" >
                      Home
                    </Link>
                  </li>
                  <li className="menu-item" >
                    <Link to="/about" >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

    )
}

export default Header;