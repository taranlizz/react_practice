import PropTypes from "prop-types";
import { Component } from "react";
import { Button, Form, Input, Label } from "./ContactForm.styled";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name: name.trim(), number, id: nanoid() });
    this.setState({ ...INITIAL_STATE });
  };

  onChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Label htmlFor={this.inputNameId}>Name</Label>
        <Input
          type="text"
          name="name"
          required
          id={this.inputNameId}
          value={name}
          onChange={this.onChange}
        />
        <Label htmlFor={this.inputNumberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          required
          id={this.inputNumberId}
          value={number}
          onChange={this.onChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
