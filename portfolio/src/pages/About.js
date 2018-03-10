import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background: grey;
  height: 100vh;
  }
`;


const About = () => (
  <Wrapper>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </Wrapper>
);

export default About;
