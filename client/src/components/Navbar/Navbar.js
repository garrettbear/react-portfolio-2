import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
// import LogoThis from "../NavLogo";
import "./Navbar.css";

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Logo = styled(Link)`
  margin: 0 auto;
  img {
    max-width: 300px;
    text-align: center;
    align-self: center;
    padding: 25px;
  }
  @media (max-width: 960px){
    }
    @media (max-width: 600px){
      img {
        width: 50vw;
      }
    }
  }
`;

class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div>
          <nav className="desktopNav" aria-controls="desktopMenu">
          <Logo to="/">
            <img src={'/image/garrettbear-logo.png'} alt="Garrett Bear Whisten Logo"/>
          </Logo>
          <div className="navitems">
            <ul>
              <li className="navitem">
                <StyledLink to="/story">
                  <div className="itemnum">01.</div>
                  The Story
                </StyledLink>
              </li>
              <li className="navitem">
                <StyledLink to="/knowledge">
                  <div className="itemnum">02.</div>
                  Knowledge
                </StyledLink>
              </li>
              <li className="navitem">
                <StyledLink to="/experiments">
                  <div className="itemnum">03.</div>
                  Experiments
                </StyledLink>
              </li>
              <li className="navitem">
                <StyledLink to="/trackrecord">
                  <div className="itemnum">04.</div>
                  Track Record
                </StyledLink>
              </li>
              <li className="navitem">
                <StyledLink to="/communication">
                  <div className="itemnum">05.</div>
                  Communication
                </StyledLink>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="mobileNav" aria-controls="mobileMenu">
            <Menu>
              <ul>
                <li className="navitem">
                  <StyledLink to="/story">
                    <div className="itemnum">01.</div>
                    The Story
                  </StyledLink>
                </li>
                <li className="navitem">
                  <StyledLink to="/knowledge">
                    <div className="itemnum">02.</div>
                    Knowledge
                  </StyledLink>
                </li>
                <li className="navitem">
                  <StyledLink to="/experiments">
                    <div className="itemnum">03.</div>
                    Experiments
                  </StyledLink>
                </li>
                <li className="navitem">
                  <StyledLink to="/trackrecord">
                    <div className="itemnum">04.</div>
                    Track Record
                  </StyledLink>
                </li>
                <li className="navitem">
                  <StyledLink to="/communication">
                    <div className="itemnum">05.</div>
                    Communication
                  </StyledLink>
                </li>
              </ul>
            </Menu>
            <Logo className="logo" to="/">
              <img src={'/image/garrettbear-logo.png'} alt="Garrett Bear Whisten Logo"/>
            </Logo>
        </nav>
      </div>
    );
  }
}


export default Navbar;
