import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import "./Navbar.css";

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Logo = styled(Link)`
  font-family: "Apple Garamond", "AppleGaramond", Garamond, "Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: bold;
  font-size: 4em;
  text-align: center;
  align-self: center;
  color: #1f1f1f;
  text-decoration: none;
  margin-top: 25px;
  padding-bottom: 25px;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  @media (max-width: 960px){
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-top: 25px;
    }
    @media (max-width: 600px){
      font-size: 1.25rem;
      font-weight: bold;
      text-align: center;
      margin-top: 25px;
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
              GarrettBear
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
                GarrettBear
            </Logo>
        </nav>
      </div>
    );
  }
}


export default Navbar;
