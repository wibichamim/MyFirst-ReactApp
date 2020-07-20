import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        my name is {props.name} and I'm {props.age} years old
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
