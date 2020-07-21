import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        my name is {props.name} and I'm {props.age} years old
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </StyledDiv>
  );
};

export default person;
