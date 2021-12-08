import './App.css';
import { react, Component } from 'react';
export default class App extends Component {
	render() {
		return (
      <>
        import React from 'react'
        import PropTypes from 'prop-types'
        
        export default (WrappedComponent) => {
          const hocComponent = ({ ...props }) => <WrappedComponent {...props} />
        
          hocComponent.propTypes = {
          }
        
          return hocComponent
        }
        
				<form>
					<input
						type='text'
						name='name'
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</form>
			</>
		);
	}
}
