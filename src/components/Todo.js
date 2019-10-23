import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes  from 'prop-types';

 //class name  must always have Caps letter in beginning

  //this is an event parameter,e is the parameter
  /*markComplete(e)
  {
    console.log(this.props)
  }
  IF we are not using arrow functions then we have
  to use bind when calling the method in input like this:-
  onChange = {this.markComplete.bind{this}}
  */
  //
  // We can this in app.js to make thinhs easier
  //<Todoitem key={todo.id} todo={todo} onChange={this.props.markComplete}/>
  // markComplete =(e) =>
  // {
  //   console.log(this.props)
  // }This is how we can do things another way.
  //console.log(this.props.todos)To print it in the console and not just display.//we are mapping todos from app folder

class Todo extends Component {
    render() {
        return  this.props.todoo.map((todoit) =>(
            <Todoitem key={todoit.id} todoit={todoit} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
          ));
    }
}

//we call markcomplete here to access in App .js
//This are the proptypes.

Todo.propTypes = {
  todo : PropTypes.array.isRequired
}

export default Todo;
