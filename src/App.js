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
    let listOfTasks = [];
    this.state.data.forEach( (val,i) => {
      listOfTasks[i] = (
        <Task
          className="App__task"
          done={val.done}
          text={val.text}
          id={val.id}
          key={val.id}
          click={this.toggleTask} 
        />
      );
    } )

    return (
      <div className="App">
        <h1 className="App__heading">TODO List</h1>
        {listOfTasks}
      </div>
    );
  };
}

export default App;
