import React from 'react'; 
import Todo from './Todo'; 

class TodoList extends React.Component {

  // handleClick = ()=> {
  //   this.props.handleTaskCompleted();
  // }

  render(){
    return (
      <div className="task-list">
        {this.props.tasks.map(task => (
          <Todo handleTaskToggle={this.props.handleTaskToggle} key={task.id} task={task} />
        ))}
        {/* <button onClick={this.handleClick} className="clear-btn">Clear Task</button> */}
      </div>
    )
  }
}

export default TodoList;