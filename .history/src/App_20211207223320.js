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

		this.reset();
	};

	reset = () => {
		this.setState({
			contacts: [],
			name: '',
		});
	};

	render() {
		const { inputValue } = this.inputValue;
		return (
			<>
				<h1>Phonebook</h1>

				<ul>
					{this.state.contacts.map((el) => (
						<li>{el}</li>
					))}
				</ul>
			</>
		);
	}
}
