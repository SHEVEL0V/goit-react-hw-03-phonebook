import React, { Component } from 'react';
import Container from './container/container';
import Form from './form/form';
import ContactsList from './contactsList/contactsList';
import Filter from './filterContacts/filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localSt = JSON.parse(window.localStorage.getItem('contactsList'));
    if (localSt) {
      this.setState({ contacts: localSt });
    }
  }

  componentDidUpdate(preProps, preState) {
    const { contacts } = this.state;
    if (contacts !== preState.contacts) {
      window.localStorage.setItem('contactsList', JSON.stringify(contacts));
    }
  }

  addValidContacts = value => {
    const contacts = this.state.contacts;

    const arrey = [...contacts, value];

    if (
      contacts.every(e => e.name.toLowerCase() !== value.name.toLowerCase())
    ) {
      this.setState({ contacts: arrey });
    } else {
      alert(`"${value.name}" is already in contact!`);
    }
  };

  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  filterVisibleEl = () => {
    const { contacts, filter } = this.state;
    const filterLowCace = filter.toLowerCase();

    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterLowCace);
    });
  };
  removeContacts = id => {
    this.setState(preState => {
      return { contacts: preState.contacts.filter(el => el.id !== id) };
    });
  };

  render() {
    const visibleContacts = this.filterVisibleEl();
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <Form addContacts={this.addValidContacts} />

          <Filter onChange={this.onChangeFilter} value={this.state.filter} />
        </div>
        <ContactsList
          contacts={visibleContacts}
          removeContacs={this.removeContacts}
        />
      </Container>
    );
  }
}

export default App;
