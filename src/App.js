import './App.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};

	handleSubmit = (state) => {
		if (!this.state.contacts.filter((el) => el.name === state.name).length > 0) {
			this.setState((prevState) => ({
				contacts: [...prevState.contacts, { name: state.name, number: state.number, id: nanoid() }],
			}));
		} else {
			alert(`${state.name} is already in contacts`);
		}
	};

	handleDeleteItem = (e) => {
		let currentId = e.target.parentNode.getAttribute('id');
		this.setState({
			contacts: this.state.contacts.reduce((acc, contact) => {
				return contact.id !== currentId ? [...acc, contact] : acc;
			}, []),
		});
	};

	searchContact = (e) => {
		this.setState({ filter: e.currentTarget.value });
	};

	filteredContacts = () => {
		const { contacts, filter } = this.state;
		const normalizedFilter = filter.toLowerCase();
		const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
		return filteredContacts;
	};

	render() {
		const { filter } = this.state.filter;

		return (
			<>
				<h1>Phonebook</h1>

				<ContactForm onSubmit={this.handleSubmit} />

				<h2>Contacts</h2>

				<Filter filter={filter} onChange={this.searchContact} />

				<ContactList filteredContacts={this.filteredContacts()} handleClick={this.handleDeleteItem} />
			</>
		);
	}
}
