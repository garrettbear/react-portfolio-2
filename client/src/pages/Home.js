import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 15px;
  background: #f1f1f1;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  }
`;
const MainText = styled.div`
  text-align: center;
  align-self: center;
  line-height: .8;
  }
`;
// const StyledButton = styled.button`
//   width: 200px;
//   height: 75px;
//   border: 3px solid #000;
//   background: gold;
//   :hover{
//     background:white;
//     cursor: pointer;
//   }
//   & a {
//     font-size: 1.5rem;
//     font-family: "Helvetica Neue", Helvetica, sans-serif;
//     color: black;
//     &:focus, &:hover, &:visited, &:link, &:active {
//       text-decoration: none;
//     } 
//   }
//   }
// `;

const Home = () => (
<Wrapper>
  <MainText>
    <h2>Garrett Bear Whisten</h2>
    <h6>Front End Developer</h6>
    <p>Always doing weird things.</p>
  </MainText>
</Wrapper>
);

export default Home;
