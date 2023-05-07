import { Component } from 'react';
import * as Styled from './styled';

export class Filter extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.props.filter({ [name]: value });
  };

  render() {
    return (
      <>
        <Styled.ContactsFeature>Find contacts by name</Styled.ContactsFeature>
        <Styled.Input type="text" name="filter" onChange={this.handleChange} />
      </>
    );
  }
}
