import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Input } from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    country: '',
    message: '',
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <div> 
        <Nav />
        <h1>Contact</h1>
        <Input
          type='text' 
          label='Name' 
          name='name' 
          value={this.state.name} 
          onChange={this.handleChange.bind(this, 'name')} 
        />
        <Input
          type='email' 
          label='Email' 
          name='email' 
          value={this.state.email} 
          onChange={this.handleChange.bind(this, 'email')}
        />
        <Input
          type='text' 
          label='Country' 
          name='country' 
          value={this.state.country} 
          onChange={this.handleChange.bind(this, 'country')}
        />
        <Input
          type='text' multiline
          label='Message' 
          name='message' 
          value={this.state.message} 
          onChange={this.handleChange.bind(this, 'message')}
        />
        <Button
        
        />
        <Footer />
      </div>
    );
  }
}

export default Contact;
