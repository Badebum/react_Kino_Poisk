import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class SearchForm extends Component {
  state = { query: '' };

  handleChange = e => this.setState({ query: e.currentTarget.value });
  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.hendleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
            className={styles.SearchFormInput}
          />
        </form>
      </header>
    );
  }
}
export default SearchForm;
