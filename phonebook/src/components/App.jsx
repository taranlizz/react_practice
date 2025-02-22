import { Component } from "react";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { ContactFilter } from "./ContactFilter";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onContactSubmit = (contact) => {
    const isPresent = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isPresent) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  onContactDelete = (id) => {
    const updatedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  onFilterChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    // console.log(contacts);
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onContactSubmit} />
        <h2>Contacts</h2>
        <ContactFilter onChange={this.onFilterChange} value={filter} />
        {Boolean(filteredContacts.length) && (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.onContactDelete}
          />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
