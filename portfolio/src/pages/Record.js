import React from "react";
import styled from 'styled-components';
import RecordHero from "../components/RecordHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
  height: 100%;
`;


class Record extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div>
      <Wrapper>
        <RecordHero />
      </Wrapper>
      </div>
    );
  }
}


export default Record;
