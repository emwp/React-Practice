import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="Everton Pereira" email="emwp@gmail.com" phone="+5547999573901" />
          <Contact name="Douglas" email="dogla@gmail.com" phone="+5547991588893" />
        </div>
      </div>
    );
  }
}

export default App;
