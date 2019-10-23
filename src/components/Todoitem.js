import React, { Component } from 'react';
import PropTypes  from 'prop-types';


class Todoitem extends Component { //It must always have Caps letter in beginning
//  getStyle = () =>{
    // if (this.props.todo.completed) {
    //   return{
    //       textDecoration :'Line-through'
    //   }
    //   else{
    //     return{
    //       textDecoration :'none'We can use ternary operation as shown below
getStyle = () =>{
      return{
        backgroundColor:'lightgreen',
        padding:'15spx',
        color:'black',
        border:'1px black solid',
        marginBottom: '4px',
        borderRadius:'4px',
        textDecoration: this.props.todoit.completed ?'Line-through' : 'none'

      }
    }
    //console.log(this.props.todos)To print it in the console and not just display.
   //Since we made this here we no jus need to pass them to the onChange
    //or else you'd have to had to do it this way :- <input type="checkbox" onChange=(this.props.markComplete.bind(this.props.todo.title)
    // style function below gives the style.giving the style to the background
    render() {
        const { id, title } = this.props.todoit;
        return (
          <div style ={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this ,id)
          } />{' '}{ title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this ,id)}>X</button>
          </p>
          </div>
        )
    }
}
//or we can use this.props.todoo.id instead of just is but no need since we used const above.
//onClick here is an event.
//This are the proptypes.
Todoitem.propTypes = {
  todo : PropTypes.object.isRequired
}

const btnStyle ={
  background:'Red',
  color:"White",
  border:'none',
  cursor:"pointer",
  borderRadius:'50%',
  padding:'5px 10px',
  float:'right',
  marginBottom:'5px'
}


export default Todoitem;
