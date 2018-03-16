import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 100px;
  background: red;
  min-height: 100vh;
  text-align: center;
  }
`;
const StyledButton = styled.button`
  width: 200px;
  height: 75px;
  border: 3px solid #000;
  background: gold;
  :hover{
    background:white;
    cursor: pointer;
  }
  & a {
    font-size: 1.5rem;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    } 
  }
  }
`;

const Home = () => (
<Wrapper>
  <h2>Welcome to GarrettBear.com</h2>
  <h3>My site is currently under construction.</h3>
  <p>Seriously it is... today is March 15th, 2018 & I just started...</p>
  <p>So keep checking back for the next few days & it should be done soon.</p>
  <p>If you're looking to get in contact with me please email me at gwhisten@gmail.com</p>
  <StyledButton><a href="https://www.linkedin.com/in/gwhisten/" target="_blank" rel="noopener noreferrer">LinkedIn</a></StyledButton>
</Wrapper>
);

export default Home;
