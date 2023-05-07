import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContactFormSubmit = data => {
    this.setState(prev => {
      return { contacts: prev.contacts.concat(data) };
    });
  };

  handleFilter = data => {
    this.setState(data);
  };

  handleDelete = data => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(el => el.id !== data) };
    });
  };

  render() {
    const { state, handleContactFormSubmit, handleFilter, handleDelete } = this;

    return (
      <Styled.Section>
        <Styled.PhonebookTitle>Phonebook</Styled.PhonebookTitle>
        <ContactForm submit={handleContactFormSubmit} state={state} />
        <Styled.ContactsTitle>Contacts</Styled.ContactsTitle>
        <Filter filter={handleFilter} />
        <ContactList state={state} delete={handleDelete} />
      </Styled.Section>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired)
    ),
    filter: PropTypes.string.isRequired,
  }),
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  delete: PropTypes.func.isRequired,
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired)
    ),
    filter: PropTypes.string.isRequired,
  }),
};
