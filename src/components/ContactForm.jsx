import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.submit(contact);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { state, handleChange, handleSubmit } = this;

    const inputNameId = nanoid();
    const inputNumberId = nanoid();

    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={inputNameId}>Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          id={inputNameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={inputNumberId}>Number</label>
        <input
          type="tel"
          name="number"
          value={state.number}
          onChange={handleChange}
          id={inputNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
