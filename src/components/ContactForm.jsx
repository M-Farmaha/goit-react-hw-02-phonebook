import { Component } from 'react';
import { nanoid } from 'nanoid';
import * as Styled from './styled';

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

    if (this.props.state.contacts.find(el => el.name === contact.name)) {
      alert(`${contact.name} is already in contacts `);
      return;
    }

    this.props.submit(contact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { state, handleChange, handleSubmit } = this;

    const inputNameId = nanoid();
    const inputNumberId = nanoid();

    return (
      <Styled.Form onSubmit={handleSubmit} autoComplete="off">
        <Styled.Label htmlFor={inputNameId}>Name</Styled.Label>
        <Styled.Input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          id={inputNameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Styled.Label htmlFor={inputNumberId}>Number</Styled.Label>
        <Styled.Input
          type="tel"
          name="number"
          value={state.number}
          onChange={handleChange}
          id={inputNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Styled.Button type="submit">Add contact</Styled.Button>
      </Styled.Form>
    );
  }
}
