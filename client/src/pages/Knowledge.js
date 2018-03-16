import React from "react";
import styled from 'styled-components';
import KnowledgeHero from "../components/KnowledgeHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
  min-height: 100vh;
`;

const KnowledgeStuff = styled.div`
  padding: 20px 0 50px 0;
  max-width: 600px;
  margin: 0 auto;
  background: none;
  h6 {
    width: 50px;
    border-bottom: 10px solid #1f1f1f;
    margin: 30px 0 10px 0;
    padding-bottom: 10px;
  }
  h5{
    text-align: center;
    font-style: italic;
  }
  @media (max-width: 600px) {
    margin: 10px 20px;
  }
  & .bold {
    font-weight: bold;
  }
`;

class Knowledge extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div>
      <Wrapper>
        <KnowledgeHero />
        <KnowledgeStuff>
          <h5>Knowledge</h5>
          <p>The best way to gain knowledge is through experience. Garrett has a strong desire for curiosity which leads him to new experiences/experiments. It's actually what kind of led him to get into web development. "How exactly does this work?" He is constantly learning new things and applying them to a real case scenario or experiment. Over the years Garrett has gained a strong background in technology, design, automotive, sports, business, food, beer, coffee, photography, and a lot more to list.</p>
          <h6>Programming Languages/Tools</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>ExpressJS</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>Zurb Foundation</li>
            <li>MaterializeCSS</li>
            <li>Firebase</li>
            <li>Heroku</li>
            <li>Git</li>
            <li>MySQL</li>
            <li>&amp; constantly learning more. </li>
          </ul>
          <h6>Design</h6>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Sketch</li>
            <li>InVisionApp</li>
          </ul>
        </KnowledgeStuff>
      </Wrapper>
      </div>
    );
  }
}


export default Knowledge;
