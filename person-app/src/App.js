import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [{
        name: 'Terry',
        age: 38
      },
      {
        name: 'John',
        age: 62
      },
      {
        name: 'Steve',
        age: 26
      },
      {
        name: 'Mark',
        age: 34
      }]
    }
  }

  changeProp = (e, prop) => {
    this.setState(prevState => {
      const key = +e.target.id.replace(prop, '') 
      let persons = prevState.persons.slice(0);
      persons[key][prop] = e.target.value
      return { persons }
    });
  }

  addPersonHandler = () => {
    this.setState(prevState => ({ 
      persons: prevState.persons.concat({ name: 'Change Me', age: 0}) 
    }));
  }

  resetHandler = () => {
    this.setState(prevState => ({
      persons: prevState.persons.slice(0,4)
    }));
  }

  changedNameHandler = e => this.changeProp(e, 'name')
  changedAgeHandler = e => this.changeProp(e, 'age')
  changedHobbiesHandler = e => this.changeProp(e, 'hobbies')
  addHobbies = e => this.changeProp({ target: { id: e.target.id.replace('add', ''), value: ' ' } }, 'hobbies')

  render() {
    const personList = this.state.persons.map((p,i) => <Person key={i} idx={i} name={p.name} age={p.age} hobbies={p.hobbies} addHobbies={this.addHobbies} changeName={this.changedNameHandler} changeAge={this.changedAgeHandler} changeHobbies={this.changedHobbiesHandler} />);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">People App</h1>
          <button className="btn primary" onClick={this.addPersonHandler}>Add People</button>{' '}
          <button className="btn warning" onClick={this.resetHandler}>Reset People</button><br />
          {personList}
        </header>
      </div>
    );
  }
}

export default App;
