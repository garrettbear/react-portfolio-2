import React from "react";
import styled from 'styled-components';
import RecordHero from "../components/RecordHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
`;

const TrackRecords = styled.div`
  padding: 20px 0 50px 0;
  max-width: 600px;
  margin: 0 auto;
  background: none;
  .resumeButtons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    text-align: center;
    margin: 0 auto;
    background: none;
    width: 350px;
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


const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  border: 2px solid #1f1f1f;
  background: none;
  margin: 10px;
  :hover{
    background: #1f1f1f;
    cursor: pointer;
    a {
      color: #fff;
    }
  }
  a {
    font-size: 1rem;
    letter-spacing: 1px;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    color: black;
    font-weight: 400;
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    } 
  }
  }
`;


class Record extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return <div>
        <Wrapper>
          <RecordHero />
          <TrackRecords>
            <h5>Track Record</h5>
            <p>
              Garrett “Bear” Whisten has a unique background and if you
              haven’t read his story page, it’s highly recommended that you
              do. As a developer, designer, mechanic, barista, and even a
              Disneyland cast member. LinkedIn has Garrett’s full work
              history, but this just highlights some of his more recent
              work. PDF Resume is available for download below.
            </p>
            <div className="resumeButtons">
            <StyledButton><a href="https://www.linkedin.com/in/gwhisten/" target="_blank" rel="noopener noreferrer">LinkedIn</a></StyledButton>
            <StyledButton><a href="https://drive.google.com/open?id=1BA6nOz1yAGgrjGa-qv7EwHC9fDThrDth" target="_blank" rel="noopener noreferrer">Resume</a></StyledButton>
            </div>
          </TrackRecords>
        </Wrapper>
      </div>;
  }
}


export default Record;
