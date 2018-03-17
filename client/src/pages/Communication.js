import React from "react";
import styled from 'styled-components';
import CommunicationHero from "../components/CommunicationHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
  min-height: 100vh;
`;

const ExperimentsStuff = styled.div`
  padding: 20px 0 50px 0;
  max-width: 600px;
  margin: 0 auto;
  background: none;
  h5{
    text-align: center;
    font-style: italic;
  }
  a{
    text-decoration: none;
  }
  .pageDescription {
    padding-bottom: 50px;
  }
  @media (max-width: 600px) {
    margin: 10px 20px;
  }
  & .bold {
    font-weight: bold;
  }
`;
const ExperimentItem = styled.div`
  background: gold;
  padding: 2px 10px;
  border-radius: 10px;
  margin: 10px 0;
  h6 {
    width: 300px;
    text-decoration: none;
    border-bottom: 10px solid #1f1f1f;
    margin: 30px 0 10px 0;
    padding-bottom: 10px;
  }
  :hover {
    background: pink;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;



class Communication extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return <div>
        <Wrapper>
          <CommunicationHero />
          <ExperimentsStuff>
            <h5>Communication</h5>
            <p className="pageDescription">
              With a B.S. degree in Communications, Garrett Whisten is always open to connecting. You can reach out to him through social media, email, text, phone, or even in person for a beer. You'll find that below some of his contact info seems to be an equation... that's odd? It help's filter out some of the spammers, but also just helps give you some brain stimulation.
            </p>
              <ExperimentItem>
                <a href="mailto:gwhisten@gmail.com?Subject=You%20Have%20The%20Best%20Portfolio" target="_top" rel="noopener noreferrer">
                  <h6>Email - S/N: 0001205613</h6>
                  <span>Equation:</span>
                  <p>
                    first initial + last name + Google Mail = Garrett's Email
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="tel:+19255221888">
                  <h6>Phone -   S/N: 0019286204</h6>
                  <span>Equation:</span>
                  <p>
                    37 x 25 =  Area Code <br />
                    500 + 22 = First 3 Digits <br />
                    186912 / 99 = Last 4 Digits <br />
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://github.com/garrettbear" target="_blank" rel="noopener noreferrer">
                  <h6>GitHub -   S/N: 0407688100</h6>
                  <span>Link:</span>
                  <p>
                    https://github.com/garrettbear
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://www.linkedin.com/in/gwhisten/" target="_blank" rel="noopener noreferrer">
                  <h6>LinkedIn -   S/N: 0100087399</h6>
                  <span>Link:</span>
                  <p>
                    https://www.linkedin.com/in/gwhisten/
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://www.instagram.com/garrettbear/" target="_blank" rel="noopener noreferrer">
                  <h6>Instagram -   S/N: 0003282314</h6>
                  <span>Equation:</span>
                  <p>
                    First name + nickname (hint: wild animal) = Follow Me
                  </p>
                </a>
              </ExperimentItem>
          </ExperimentsStuff>
        </Wrapper>
      </div>;
  }
}


export default Communication;
