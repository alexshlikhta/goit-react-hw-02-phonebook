import './App.css';
import { react, Component } from 'react';
export default class App extends Component {
	state = {
		contacts: [],
		name: '',
	};

	inputValue = '';

	handleChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState((prevState) => ({
			contacts: [...prevState.contacts, this.state.name],
		}));
		this.resetForm();
	};

	resetForm = () => {
		this.setState({
			name: '',
		});
	};

	render() {
		const { inputValue } = this.inputValue;
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
						value={inputValue}
						onChange={this.handleChange}
					/>

					<button type='submit'>Add contact</button>
				</form>

				<ul>
					{this.state.contacts.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ul>
			</>
		);
	}
}