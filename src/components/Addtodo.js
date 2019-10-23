import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Addtodo extends Component {
  //NOW WE CREATE STATES FOR THE ADD VALUES WE GIVE IN INPUT.
  //but when we declare state below an error will be shown because
  //as we type in onChange event will be triggered and that will not be declared so we do it as below.

  state ={
    title :''
  }

  //prevent preventDefault is to prevent it to the actualfile.
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: '' });
  }


  onChange = (e) => this.setState({title: e.target.value});
  //here the target.value is to recieve the value we passed(Here 'e' as the parameter.).
  //we can also give title as e.target.name which is below seen as 'title' in input (name ='title')
   //value is important for the display
  render () {
    return (
      <form style ={{display : 'flex' }} onSubmit={this.onSubmit}>
       <input
        type ="text"
        name ='title'
        style = {{flex :'10' , padding:'5px', marginBottom:'6px'}}
        placeholder ='Add Items todo..'
        value ={this.state.title}
        onChange ={this.onChange}
       />

       <input
        type ="submit"
        value ="submit"
        className ="btn"
        style = {{flex:'1'}}
       />
      </form>
    )
  }
}



export default Addtodo;
