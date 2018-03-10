import React from "react";
import styled from 'styled-components';
import ExperimentsHero from "../components/ExperimentsHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
  height: 100%;
`;


class Experiments extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div>
      <Wrapper>
        <ExperimentsHero />
      </Wrapper>
      </div>
    );
  }
}


export default Experiments;
