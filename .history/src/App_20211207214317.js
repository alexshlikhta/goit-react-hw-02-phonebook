import './App.css';
import { react, Component } from 'react';
export default class App extends Component {
	state = {
		contacts: [],
		name: '',
	};

	inputValue = '';

	handleChange = (e) => {
		this.inputValue = e.target.value;
	};

  setContact = () =>
  {
    const { inputValue } = this.inputValue;
    this.setState()
  }

	render() {
		const { inputValue } = this.inputValue;
		return (
			<>
				<h1>Phonebook</h1>

        <form onSubmit={this.setContact}>
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
					<li>Contact 1</li>
				</ul>
			</>
		);
	}
}
