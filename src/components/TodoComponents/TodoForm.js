import React from 'react'; 

class TodoForm extends React.Component {
  constructor (){
    super(); 
    this.state = {
      inputValue: ""
    }
  }
  
  handleChanges = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleTaskAdd(this.state.inputValue);
    this.setState({
      inputValue:""
    });
  }

  handleClick = ()=> {
    this.props.handleTaskCompleted();
  }

  render(){
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        {
        <input value={this.state.inputValue} onChange={this.handleChanges} type="text" name="task"/>
        }
        <button>Add</button>
        <button onClick={this.handleClick} className="clear-btn">Clear Task</button>
      </form>
      </>
    );
  }
}

export default TodoForm;