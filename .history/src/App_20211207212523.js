import './App.css';
import { react, Component } from 'react';
export default class App extends Component {
	state = {
		contacts: [],
		name: '',
	};

	handleChange = (e) => {
		this.setState();
	};
  render()
  {
    const { value } = this.state;

		return (
			<>
				<h1>Phonebook</h1>

				<form>
					<input
						type='text'
						name='name'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
            value={value}
            onChange={this.handleChange}
					/>
				</form>
			</>
		);
	}
}
