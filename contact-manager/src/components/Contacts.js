import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Douglas',
        email: 'dorgla@gmail.com',
        phone: '+5547999655544',
      },
      {
        id: 2,
        name: 'Osvaldo',
        email: 'osvaldo@gmail.com',
        phone: '+55479996544785',
      },
      {
        id: 3,
        name: 'Jonatas',
        email: 'jonatas@gmail.com',
        phone: '+55479996544781',
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
