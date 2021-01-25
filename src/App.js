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
        {id:4, done: false, text: 'Не забыть поспать'},
        {id:5, done: false, text: 'Посмотреть винкс'}
      ]
    }

  }

  toggleTask = (id) => {
    const obj = {...this.state};
    let k = -1;
    let toggle = true;
    obj.data.forEach((val,i) => {
      if (toggle && val.id === id) {
        k = i;
        toggle = false;
      }
    });
    if (k !== -1) obj.data[k].done = !obj.data[k].done;
    
    // obj.data.sort((a) => a.done);

    this.setState(obj);
  }

  render() {
    let listOfTasks = [];
    let listOfCompletedTasks = [];
    this.state.data.forEach( (val,i) => {
      let el = (
        <Task
          className="App__task"
          done={val.done}
          text={val.text}
          id={val.id}
          key={val.id}
          click={this.toggleTask} 
        />
      );
      if (!val.done) {
        listOfTasks.push(el);
      } else {
        listOfCompletedTasks.push(el);
      }
    });



    if (listOfTasks.length === 0) {
      listOfTasks = <p className="App__text">There are no tasks</p>;
    }
    if (listOfCompletedTasks.length === 0) {
      listOfCompletedTasks = <p className="App__text">There are no completed tasks yet</p>;
    }

    return (
      <div className="App">
        <h1 className="App__heading">TODO List</h1>
        {listOfTasks}
        <h2 className="App__heading App__heading--bordered">Completed</h2>
        {listOfCompletedTasks}
      </div>
    );
  };
}

export default App;
