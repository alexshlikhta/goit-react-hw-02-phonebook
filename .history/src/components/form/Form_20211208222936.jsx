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
</form>;
