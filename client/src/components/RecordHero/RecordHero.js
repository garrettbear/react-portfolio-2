import React from "react";
import styled from 'styled-components';

const HeroContainer = styled.div`{
  padding-top: 50px;
  max-width: 960px;
  background: #f1f1f1;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
}
`;

const ImgHero = styled.img`{
    width: 100%;
    max-width: 600px;
    background: #f1f1f1;
    justify-self: center;
  }
`;

const ImgText = styled.div`{
  position: absolute;
  top: 10%;
  left: 15%;
  padding: 10px;
  margin: 10px 0 0 0;
  width: 270px;
  height: 120px;
  border-radius: 10px;
  background: #E3D7C1;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  transform: rotate(90deg);
  h5 {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 5px solid #1f1f1f;
    line-height: 50%;
  }
  @media (max-width: 750px) {
    top: 15%;
    left: 0;
    transform: none;
  }
}
`;

const RecordHero = props => (
  <HeroContainer>
  <ImgText>
  <h5>04 - Track Record</h5>
  <p>
  Garrett’s work experience as a 
  developer, designer,mechanic, barista,
  &amp; a Disney Cast Member.
  </p>
  </ImgText>
  {/* for production need to make it ./image/garrettwhisten-1.jpg to display on GitHub */}
  <ImgHero src={'/image/garrettwhisten-6.jpg'} alt="Main Image with 90degree display"/>
  </HeroContainer>
);

export default RecordHero;
