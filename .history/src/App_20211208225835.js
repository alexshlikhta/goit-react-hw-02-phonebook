import './App.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
	state = {
		contacts: [],
		name: '',
		number: '',
	};

	userExist = false;

	handleChange = (e) => {
		this.setState({
			[e.target.getAttribute('name')]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (!this.state.contacts.includes(this.state.name)) {
			this.userExist = false;
			this.setState((prevState) => ({
				contacts: [...prevState.contacts, { name: this.state.name, number: this.state.number }],
			}));
			this.clearFields();
		} else {
			this.userExist = true;
			this.clearFields();
		}
	};

	handleDeleteItem = (e) => {};

	clearFields = () => {
		this.setState({
			name: '',
			number: '',
		});
	};

	render() {
		const userExist = this.userExist;

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

					<input
						type='tel'
						name='number'
						pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
						title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
						required
						value={this.state.number}
						onChange={this.handleChange}
					/>

					<button type='submit'>Add contact</button>
				</form>

				<ul>
					{this.state.contacts.map(
						(el, index) => (
							(
								<li id={nanoid()} key={index}>
									{el.name}
									{el.number}

									<button onClick={this.handleDeleteItem}>Delete</button>
								</li>
							)
						)
					)}
					{userExist ? <span>This user exists</span> : ''}
				</ul>
			</>
		);
	}
}