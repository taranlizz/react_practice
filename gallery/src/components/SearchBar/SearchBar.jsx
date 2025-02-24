import PropTypes from "prop-types";
import { Header, Form, Icon } from "./SearchBar.styled";
import { Component } from "react";

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };

  onQueryChange = (evt) => {
    this.setState({ query: evt.target.value });
  };

  onSearchSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
            name="query"
            onChange={this.onQueryChange}
            value={query}
            required
          />
          <button type="submit">
            <Icon />
          </button>
        </Form>
      </Header>
    );
  }
}
