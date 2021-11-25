import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = e => this.setState({ query: e.currentTarget.value });

  submitForm = e => {
    e.preventDefault();
    const { query } = this.state;

    const { onSubmit } = this.props;
    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          placeholder="Search film"
          autoComplete="off"
          value={query}
          autoFocus
          onChange={this.handleChangeQuery}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
