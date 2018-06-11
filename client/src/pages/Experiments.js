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
            <p className="pageDescription">
              Warning: Most of these projects will open up on a new tabs, since they all live in different parts of the web. 
            </p>
            <ExperimentItem>
                <a href="https://ecomrush.com" target="_blank" rel="noopener noreferrer">
                  <h6>EcomRush - 01.1.989</h6>
                  <span>Experiment Description:</span>
                  <p>
                    Product and service review platform that reaches out to customers more effectively. 
                    We believe in honesty and accuracy.
                  </p>
                  <p>
                    More details about this application are under stealthmode and we currently have launched some beta tests to insure that we are building a product that best suits our customers and is scalable in several directions.
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://money-rocket.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <h6>Money Rocket - 11.4.876</h6>
                  <span>Experiment Description:</span>
                  <p>
                    An application to help promote financial self control. For this application, Garrett was responsible for building the front end developement using MaterializeCSS and D3 (for the charts). This project was a team effort with Zhong and Nathan.
                  </p>
                  <p>The README &amp; Repo have more info: &nbsp;
                    <a href="https://github.com/garrettbear/money-map" target="_blank" rel="noopener noreferrer">
                      https://github.com/garrettbear/money-map
                    </a>
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://contact-search.netlify.com/" target="_blank" rel="noopener noreferrer">
                  <h6>Contact Search - 09.1.786</h6>
                  <span>Experiment Description:</span>
                  <p>
                    A client side contact search bar using React and Styled Components.
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://mdk82.github.io/Project-01-Message-Board/" target="_blank" rel="noopener noreferrer">
                  <h6>Portfolio Message Board - 13.4.986</h6>
                  <span>Experiment Description:</span>
                  <p>
                    A message board for your portfolio to allow your vistors to leave a nice comment. Project was built with vanilla CSS, JQuery, Giphy API, and Firebase. Michael handled working with Firebase and Danilo helped get the Giphy API connected. 
                  </p>
                </a>
              </ExperimentItem>
              <ExperimentItem>
                <a href="https://garrettbear.github.io/jquery-crystal-game/" target="_blank" rel="noopener noreferrer">
                  <h6> Seven Dwarfs Diamond Game - 03.9.333</h6>
                  <span>Experiment Description:</span>
                  <p>
                    A crystal game for you to guess the value of each diamond and have your score match the # of diamonds. Project built using JQuery as the main focus. 
                  </p>
                </a>
              </ExperimentItem>
          </ExperimentsStuff>
        </Wrapper>
      </div>;
  }
}


export default Experiments;
