import { Component } from 'react';

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
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button type="button" id={contact.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
