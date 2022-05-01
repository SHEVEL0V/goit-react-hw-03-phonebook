import React, { Component } from 'react';
import Container from './container/container';
import Form from './form/form';
import ContactsList from './contactsList/contactsList';
import Filter from './filterContacts/filter';
// import fechAPI from "../fechAPI/fech";

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

  componentDidUpdate() {
    window.localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
  }

  addValidContacts = value => {
    const contacts = this.state.contacts;
    const arrey = [...contacts, value];
    if (
      contacts.every(e => e.name !== value.name) &&
      contacts.every(e => e.number !== value.number)
    ) {
      console.log(value);
      this.setState({ contacts: arrey });
    } else {
      alert(`"${value.name}" is already in contact!`);
    }
  };

  onInputFilter = value => {
    this.setState({ filter: value.trim() });
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
    const contactsList = this.filterVisibleEl();
    console.log(contactsList);
    return (
      <Container>
        <div>
          <Form onSubmit={this.addValidContacts} />
          <Filter onInputFilter={this.onInputFilter} />
        </div>
        <ContactsList contacts={contactsList} removeContacs={this.removeContacts} />
      </Container>
    );
  }
}

export default App;
