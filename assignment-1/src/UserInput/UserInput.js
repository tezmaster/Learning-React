import React from 'react';
import './UserInput.css';

const userInput = (props) => (
    <div class="userInput">
        <span>Alter Username: </span> 
        <input id={"user" + props.idx } type="text" autoFocus value={props.name} onChange={props.changed} />
    </div>
)

export default userInput;