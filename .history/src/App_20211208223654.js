import './App.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid'

export default class App extends Component {
	state = {
		contacts: [],
		name: '',
	};

	userExist = false;

	handleChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (!this.state.contacts.includes(this.state.name)) {
			this.userExist = false;
			this.setState((prevState) => ({
				contacts: [...prevState.contacts, this.state.name],
			}));
			this.clearFields();
		} else {
			this.userExist = true;
			this.clearFields();
		}
	};

	clearFields = () => {
		this.setState({
			name: '',
		});
	};

	render() {
		const userExist = this.userExist;
		console.log('render', userExist);

		return (
			<>
				<h1>Phonebook</h1>

				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='name'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						value={this.state.name}
						onChange={this.handleChange}
					/>

					<button type='submit'>Add contact</button>
				</form>

				<ul>
					{this.state.contacts.map((el, index) => (
						<li id= key={index}>{el}</li>
					))}
					{userExist ? <span>This user exists</span> : ''}
				</ul>
			</>
		);
	}
}
