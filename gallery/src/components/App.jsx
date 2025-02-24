import { Component } from "react";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchPictures, PER_PAGE } from "../api/fetchPictures";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isModalOpen: false,
    activeImage: null,
    isLoading: false,
    showLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });

        const { hits, totalHits } = await fetchPictures(query, page);

        console.log(hits);

        this.setState((state) => ({
          images: [...state.images, ...hits],
          showLoadMore: this.state.page < Math.ceil(totalHits / PER_PAGE),
        }));
      } catch {
        console.log();
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSearchSubmit = (query) => {
    this.setState({ query: `${Date.now()}/${query}`, page: 1, images: [] });
  };

  onLoadMoreClick = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
  };

  onModalOpen = (image) => {
    this.setState({ isModalOpen: true, activeImage: image });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false, activeImage: null });
  };

  render() {
    const { images, isModalOpen, activeImage, isLoading, showLoadMore } =
      this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Layout>
          {isLoading && <Loader />}
          {images.length > 0 && (
            <ImageGallery onImageClick={this.onModalOpen} images={images} />
          )}
          {showLoadMore && (
            <Button onClick={this.onLoadMoreClick} loading={isLoading} />
          )}
        </Layout>
        {isModalOpen && (
          <Modal image={activeImage} onClose={this.onModalClose} />
        )}
        <GlobalStyle />
      </>
    );
  }
}
