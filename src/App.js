import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';
//axios is an npm library.
import './App.css';
//componentdidmount is a lifecycle which will run after the component is mounted.
class App extends Component {
	state = {
		todoo: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=20 ')            //copied from json.placeholder.typicode
			.then((res) => this.setState({ todos: res.data }));
    	}

	// Toggle Complete
	markComplete = (id) => {
		this.setState({
			todoo: this.state.todoo.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	// Delete Todo
	delTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todoo: [...this.state.todoo.filter((todo) => todo.id !== id)]
				})
			);
	};

	// Add Todo
	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title : title,
				completed: false
			})
			.then((res) => {
				res.data.id = uuid.v4();
				this.setState({ todoo: [...this.state.todoo, res.data] });
			});
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
						<Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<Addtodo addTodo={this.addTodo} />
									<Todo
										todoo={this.state.todoo}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
