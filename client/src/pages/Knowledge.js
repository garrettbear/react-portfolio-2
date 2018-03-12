import React from "react";
import styled from 'styled-components';
import KnowledgeHero from "../components/KnowledgeHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
  height: 100%;
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
      </Wrapper>
      </div>
    );
  }
}


export default Knowledge;
