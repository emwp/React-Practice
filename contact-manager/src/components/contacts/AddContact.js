import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Phone"
                name="phone"
              />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-light" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
