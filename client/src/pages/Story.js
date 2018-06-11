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
  & .quote {
    text-align: center;
    margin: 50px 30px;
  }
  & .bold {
    font-weight: bold;
  }
  @media (max-width: 600px) {
    margin: 10px 20px;
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
          <p class="quote">
          <div className="bold">Big Picture:</div>" Front-End Developer with background experience as a mechanical technician and graphic designer. Strong problem-solver with expert understanding to design and deploy clean UX/UI. Proficient understanding of HTML, CSS, JavaScript,and React along with platforms functionality associated with web development and technology. "
          </p>
          <p>
          Garrett has trained to work at the Happiest Place on Earth, he was also a mechanic with a passion for classic cars, and now as a trained web/software developer putting his creativity to use with his design skills. From a very young age Garrett always blazed his own trail. A true entrepreneur at heart; he started his first black market candy business in 4th grade - only to be stopped by the feds in 5th grade. His father, being passionate in the automotive industry allowed Garrett to be hands-on and explore the world of reverse engineering by taking everything apart in the house, including dad's lawn mower (sorry Dad!).
          </p>
          <p>
          Outgoing might be a bit of an understatement. Garrett spent his early education years as a participant in all forms of the arts, especially drama class. It has enabled him to be a well rounded public speaker that can be heard all the way from the back of the room. In high school, he began to explore in-depth with art design and film photography. This exploration led to many of the hobbies that he still participates in today.
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
