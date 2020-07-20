import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Wibi", age: 22 },
      { id: "2", name: "Jaka", age: 23 },
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
  }

  if (!personsState.persons) {
    return <span>Loading...</span>;
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
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
