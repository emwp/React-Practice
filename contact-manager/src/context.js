import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };
  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
