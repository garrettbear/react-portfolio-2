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
  padding: 0;
  margin: 10px 0 0 0;
  width: 200px;
  height: 100px;
  background: none;
  transform: rotate(90deg);
  h5 {
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 5px solid #1f1f1f;
    line-height: 50%;
  }
  @media (max-width: 750px) {
    background: none;
    top: 10%;
    left: 0;
  }
}
`;

const KnowledgeHero = props => (
  <HeroContainer>
  <ImgText>
  <h5>02 - Knowledge</h5>
  <p>
  Lots of hard &amp; soft skills.
  Through experience, Garrett
  brings knowledge and wisdom.
  </p>
  </ImgText>
  {/* for production need to make it ./image/garrettwhisten-2.jpg to display on GitHub */}
  <ImgHero src={'/image/garrettwhisten-2.jpg'} alt="Main Image with 90degree display"/>
  </HeroContainer>
);

export default KnowledgeHero;
