import React from "react";
// import styled from 'styled-components';
import "./JelloBox.css";



const JelloBox = props => (
  <div className="container">
      <div className="jellobox red rubberBand"></div>
      <div className="jellobox green rubberBand"></div>
      <div className="jellobox gold rubberBand"></div>
      <div className="jellobox blue rubberBand"></div>
  </div>
);

export default JelloBox;
