import React, { Component } from 'react';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import Api from './components/API';
import Spinner from './components/Spinner';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      showModal: false,
      error: null,
      largeImage: '',
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    Api.fetchHits(options)
      .then(response => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = modalImage => {
    this.setState(() => ({ largeImage: modalImage }));
    this.toggleModal();
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
    this.toggleModal();
  };

  render() {
    const { hits, isLoading, error, largeImage, showModal } = this.state;
    const showLoadMoreBtn = hits.length > 0 && !isLoading;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={hits} onClickImage={this.openModal} />

        {showLoadMoreBtn && (
          <Button fetchImages={this.fetchHits}>load more</Button>
        )}

        {error && <h1>Ошибка</h1>}
        {isLoading && <Spinner />}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={largeImage.largeImageURL}
          />
        )}
      </div>
    );
  }
}

export default App;
