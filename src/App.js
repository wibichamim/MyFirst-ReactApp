import React, { useState } from "react";
import "./App.css";
// import styled from "styled-components";
import Person from "./Person/Person";

// const StyledButton = styled.button`
//   border-radius: 8px;
//   cursor: pointer;
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   padding: 10px;
//   cursor: pointer;
//   margin-left: 10px;
//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
//   }
// `;

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Wibi", age: 22 },
      { id: "2", name: "Weeboo", age: 23 },
    ],
    showPersons: false,
  });

  console.log(personsState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { id: "2", name: "Nana", age: 1 },
        { id: "3", name: "Nina", age: 2 },
      ],
      showPersons: true,
    });
  };

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({ persons: persons, showPersons: true });
  };

  const deletePersonHandler = (personIndex) => {
    // const person = personsState.persons;
    const person = [...personsState.persons];
    person.splice(personIndex, 1);
    setPersonsState({ persons: person, showPersons: true });
  };

  const tooglePersonHandler = () => {
    const persons = personsState.persons;
    const doesShow = personsState.showPersons;
    setPersonsState({ persons, showPersons: !doesShow });
  };

  const classes = [];
  if (personsState.persons.length <= 1) {
    classes.push("red");
  }
  if (personsState.persons.length <= 0) {
    classes.push("bold");
  }

  // const style = {
  //   backgroundColor: "green",
  //   color: "white",
  //   font: "inherit",
  //   padding: "10px",
  //   cursor: "pointer",
  //   ":hover": {
  //     backgroundColor: "lightgreen",
  //   },
  // };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => deletePersonHandler(index)}
              key={person.id}
              change={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
      </div>
    );

    // style.backgroundColor = "red";
    // style[":hover"] = { backgroundColor: "salmon" };
  }

  if (!personsState.persons) {
    return <span>Loading...</span>;
  }

  return (
    <div className="App">
      <h1 className={classes.join(" ")}>My First React App</h1>
      <button className="btn btn-switch" onClick={switchNameHandler}>
        Switch Name
      </button>
      <button className="btn btn-toogle" onClick={tooglePersonHandler}>
        Toogle Name
      </button>
      {persons}
    </div>
  );
};

export default App;
