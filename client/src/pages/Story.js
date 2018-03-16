import React from "react";
import styled from 'styled-components';
import StoryHero from "../components/StoryHero";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #f1f1f1;
`;

const AboutGarrett = styled.div`
  padding: 20px 0 50px 0;
  max-width: 600px;
  margin: 0 auto;
  background: none;
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

class Story extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div>
      <Wrapper>
        <StoryHero />
        <AboutGarrett>
          <h5>Garrett Bear Whisten</h5>
          <p>
          Garrett at one time worked at the Happiest Place on Earth, he was also a mechanic, and now in web/software development while putting use to his design skills. 
          </p>
          <p>
          <span className="bold">Big Picture:</span> Garrett is a Web Developer with a strong focus on Front End Development. He has a certificate from UC Irvine in Full Stack Development (MERN). 
          </p>
          <p>
          At a young age, Garrett would often time be found living life creatively. A true entrepreneur at heart; he started his first black market candy business in 4th grade- only to be stopped by the feds in 5th grade. His father being passionate in the automotive industry allowed Garrett to explore the world of reverse engineering his dad’s lawn mower and taking everything apart in the house. 
          </p>
          <p>
          Outgoing might be a bit of an understatement. Garrett spent his early education years as a participant in all forms of the arts, especially drama class. It has enabled him to be a well rounded public speaker that can be heard all the way from the back of the room. In high school, he began to explore in-depth with art design and film photography. This exploration led to the hobbies that he still participates in today.
          </p>
          <p>
          Rather than reading more about Garrett, you should contact him and he would happy to get to know you as well!
          </p>
          <p>
          Designer + Developer = <span role="img" aria-label="Unicorn">🦄</span>
          </p>
        </AboutGarrett>
      </Wrapper>
      </div>
    );
  }
}


export default Story;
