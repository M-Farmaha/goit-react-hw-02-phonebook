import { Component } from 'react';
import * as Styled from './styled';

export class ContactList extends Component {
  handleDelete = e => {
    this.props.delete(e.currentTarget.id);
  };

  render() {
    const { handleDelete } = this;

    const lowerCaseFilter = this.props.state.filter.toLowerCase();
    const visibleContacts = this.props.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      <Styled.ContactsList>
        {visibleContacts.map(contact => (
          <Styled.ContactsItem key={contact.id}>
            <Styled.ContactName>{contact.name}: </Styled.ContactName>
            <Styled.ContactNumber>{contact.number}</Styled.ContactNumber>
            <Styled.Button type="button" id={contact.id} onClick={handleDelete}>
              Delete
            </Styled.Button>
          </Styled.ContactsItem>
        ))}
      </Styled.ContactsList>
    );
  }
}
