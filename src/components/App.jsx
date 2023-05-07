import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export class App extends Component {
  state = {
    contacts: [],
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
