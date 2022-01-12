import React from 'react';

const ContactsList = ({ filteredContacts, handleClick }) => {
	return (
		<ul>
			{filteredContacts.map((el, index) => (
				<li id={el.id} key={index}>
					{el.name}:{el.number}
					<button onClick={handleClick}>Delete</button>
				</li>
			))}
		</ul>
	);
};

export default ContactsList;
