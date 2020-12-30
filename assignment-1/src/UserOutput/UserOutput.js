import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
        <div className="userOutput">
            <p><strong>Username: </strong>{props.name}</p>
            <p>Some other text</p>
        </div>
  );
}

export default userOutput;