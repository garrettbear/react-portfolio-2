import React from "react";
import styled from 'styled-components';
import ExperimentsHero from "../components/ExperimentsHero";

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
`;



class Experiments extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return <div>
        <Wrapper>
          <ExperimentsHero />
          <ExperimentsStuff>
            <h5>Experiments</h5>
            <p className="pageDescription">
              Here are some various projects designed and built by Garrett
              Bear Whisten. Each project displays some of his strengths in
              programming. Such as strictly vanilla CSS/JS, JQuery, AJAX,
              API, React, MongoDB, Firebase, and more.
            </p>
              <ExperimentItem>
                <a href="/experiments">
                  <h6>Guest Book - 13.4.986</h6>
                  <span>Experiment Description:</span>
                  <p>
                    Some type of modual that displays photos I have taken for
                    design inspiration. morew teijdkfnfdgk dSxzklczjckjzc zxk
                    zxkckjckjc jxkcvcxjhvj kjxhfiodsufdsf kjchxkcjxvncbv nncn
                    dhfsyfuids kjxchvkjxch dskjdjsiisccc.
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="/experiments">
                  <h6>Guest Book - 13.4.986</h6>
                  <span>Experiment Description:</span>
                  <p>
                    Some type of modual that displays photos I have taken for
                    design inspiration. morew teijdkfnfdgk dSxzklczjckjzc zxk
                    zxkckjckjc jxkcvcxjhvj kjxhfiodsufdsf kjchxkcjxvncbv nncn
                    dhfsyfuids kjxchvkjxch dskjdjsiisccc.
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="/experiments">
                  <h6>Guest Book - 13.4.986</h6>
                  <span>Experiment Description:</span>
                  <p>
                    Some type of modual that displays photos I have taken for
                    design inspiration. morew teijdkfnfdgk dSxzklczjckjzc zxk
                    zxkckjckjc jxkcvcxjhvj kjxhfiodsufdsf kjchxkcjxvncbv nncn
                    dhfsyfuids kjxchvkjxch dskjdjsiisccc.
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="/experiments">
                  <h6>Guest Book - 13.4.986</h6>
                  <span>Experiment Description:</span>
                  <p>
                    Some type of modual that displays photos I have taken for
                    design inspiration. morew teijdkfnfdgk dSxzklczjckjzc zxk
                    zxkckjckjc jxkcvcxjhvj kjxhfiodsufdsf kjchxkcjxvncbv nncn
                    dhfsyfuids kjxchvkjxch dskjdjsiisccc.
                  </p>
                </a>
              </ExperimentItem>
          </ExperimentsStuff>
        </Wrapper>
      </div>;
  }
}


export default Experiments;
