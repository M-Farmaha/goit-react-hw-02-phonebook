import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

import * as Styled from './styled';

export class ContactList extends Component {
  render() {
    const { state, children } = this.props;

    const lowerCaseFilter = state.filter.toLowerCase();
    const visibleContacts = state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      <Styled.ContactList>
        {visibleContacts.map(contact => {
          return React.cloneElement(children, {
            key: contact.id,
            name: contact.name,
            number: contact.number,
            id: contact.id,
          });
        })}
      </Styled.ContactList>
    );
  }
}

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired)
    ),
    filter: PropTypes.string.isRequired,
  }),
};
