import { Component } from 'react';

export class Filter extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.props.filter({ [name]: value });
  };

  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input type="text" name="filter" onChange={this.handleChange} />
      </>
    );
  }
}
