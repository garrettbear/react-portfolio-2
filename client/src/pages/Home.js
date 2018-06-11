import React from 'react';
import styled from 'styled-components';
import JelloBox from "../components/JelloBox";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  background: #f1f1f1;
  min-height: 100vh;
  display: grid;
  justify-content: center;
`;
const MainText = styled.div`
  text-align: center;
  align-self: center;
  line-height: 1.2;
  z-index: 100;
`;

const Home = () => (
<Wrapper>
  <MainText>
    <h2>Garrett Bear Whisten</h2>
    <h6>Front End Developer</h6>
    <p>Always doing weird things.</p>
  </MainText>
  <JelloBox />
</Wrapper>
);

export default Home;
