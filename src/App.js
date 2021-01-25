import './App.scss';
import React from 'react';
import Task from './components/Task/Task';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id:1, done: false, text: 'Погладить кота'},
        {id:2, done: false, text: 'Сделать себе чай'},
        {id:3, done: false, text: 'Сходить в душ'},
        {id:4, done: false, text: 'Не забыть поспать'}
      ]
    }

  }

  toggleTask = (id) => {
    const obj = {...this.state};
    obj.data[id-1].done = !obj.data[id-1].done;
    console.log(obj);
    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__heading">TODO List</h1>
        <Task
          className="App__task"
          done={this.state.data[0].done}
          text={this.state.data[0].text}
          id={this.state.data[0].id}
          click={this.toggleTask}
          />
      </div>
    );
  };
}

export default App;
