import React, { Component } from 'react'
import NewTasks from './NewTasks';
import TaskLists from './TaskLists';
//import Layout from './Layout';

const tasks = localStorage.getItem('tasks')
? JSON.parse(localStorage.getItem('tasks'))
: []; 
export default class Main extends React.Component {
  constructor (props){
    super(props);
      this.state=    {
      tasks: tasks,
    };
  }
  NewTasks =(task) => {
    if(task.trim() === ''){
      alert("task can't be empty");
      return;
    }
    tasks.push({task, isCompleted: false});
    this.setState({tasks: tasks});
     localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  toggleTask=(taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({tasks: tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({tasks: tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  editTask= (taskId, task)=>{
    const taskItem = tasks[taskId];
    taskItem.task=task;
    this.setState({tasks: tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  render() {
    return (
      <div className="main">
        <h1> Tasks to do:</h1>
        <div className="content">
        <NewTasks NewTasks={this.NewTasks} />
        <br />
        <TaskLists 
        tasks={this.state.tasks}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
        toggleTask={this.toggleTask}
         />
      </div>
      </div>
    )
  }
}