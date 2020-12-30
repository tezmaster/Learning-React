import React, { useState } from 'react';
import './Person.css';

const person = (props) => {
  const [isEditingName, setEditingName] = useState(false);
  const [isEditingAge, setEditingAge] = useState(false);
  const [isEditingHobbies, setEditingHobbies] = useState(false);
  const editNameHandler = e => setEditingName(!isEditingName);
  const editAgeHandler = e => setEditingAge(!isEditingAge);
  const editHobbiesHandler = e => setEditingHobbies(!isEditingHobbies);

  const showOrAddHobbies = _ => {
      if(!props.hobbies) return ''
      if(!isEditingHobbies && props.hobbies === ' ') setEditingHobbies(true)
      return !isEditingHobbies
        ? <p onClick={editHobbiesHandler}>My hobbies are {props.hobbies}</p>
        : <input id={"hobbies" + props.idx } className="small" type="text" autoFocus value={props.hobbies} onChange={props.changeHobbies} onBlur={editHobbiesHandler} onKeyDown={handleKeyDown} />
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  }

  return (
      <div className="Person">
          {!props.hobbies ? <img id={"addhobbies" + props.idx } src="/add-hobby.png" alt="Add Hobbies" onClick={props.addHobbies} /> : ''}
          {!isEditingName
            ? <h1 onClick={editNameHandler}>{props.name}</h1>
            : <input id={"name" + props.idx } type="text" autoFocus value={props.name} onChange={props.changeName} onBlur={editNameHandler} onKeyDown={handleKeyDown} />
          }
          {!isEditingAge
            ? <p onClick={editAgeHandler}>I am {props.age} years old</p>
            : <input id={"age" + props.idx } className="small" type="text" autoFocus value={props.age} onChange={props.changeAge} onBlur={editAgeHandler} onKeyDown={handleKeyDown} />
          }
          {showOrAddHobbies()}
      </div> 
  );
}

export default person;