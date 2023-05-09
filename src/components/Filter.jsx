import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export class Filter extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.props.filter({ [name]: value });
  };

  render() {
    return (
      <>
        <Styled.ContactFeature>Find contacts by name</Styled.ContactFeature>
        <Styled.Input type="text" name="filter" onChange={this.handleChange} />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
