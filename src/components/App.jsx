import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleAddContact = data => {
    const { name, number, id } = data;
    const { contacts } = this.state;
    if (
      !contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: id, name: name, number: number },
        ],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleDeleteContact = id => {
    // console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter contacts={this.state.contacts} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}
