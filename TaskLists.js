import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskLists extends Component {
  render() {
    return (
      <div>
        
        <table>
          <thead>
            <tr>
            <th>Tasks</th>
            <th>Checks</th>
            </tr>
           </thead>
           <tbody>
            {this.props.tasks.map((task, index) => (
            <TaskItem key={index} 
            taskItem={task} 
            id={index}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask} 
            toggleTask={this.props.toggleTask}
            />
            ))}
           </tbody>
        </table>
      </div>
    )
  }
}
