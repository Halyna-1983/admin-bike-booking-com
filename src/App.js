import React, { Component } from 'react';

// import localForage from 'localforage';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Section from './Components/Section';
import Form from './Components/Form';

import Footer from './Components/Footer';
import './App.css';
import shortid from 'shortid';



class App extends Component {
  state = {
    bikes: [
      {id: 'id-1', name: 'Jack', type: 'road', color: 'grey', wheelSize: '26', price: '300'},
      {id: 'id-2', name: 'Nill', type: 'mountain', color: 'blue', wheelSize: '24', price: '400'},
      {id: 'id-3', name: 'Bob', type: 'hybrid', color: 'dark-red', wheelSize: '26', price: '500'},
      {id: 'id-4', name: 'Herman', type: 'electric', color: 'green', wheelSize: '28', price: '600'},
    ],
  name: '',
  type: '',
  }

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}
  formSubmitHandler = ({ name, number }) => {
    if (this.state.bikes.some(bike => bike.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const bike = { id: shortid.generate(), name };
    this.setState(
      prevState => ({ contacts: [bike, ...prevState.bikes] })
    );
  };

  render () {
    // const normalizedThisFilterState = this.state.filter.toLowerCase();
    // const visibleBikes = this.state.bikes.filter(bike =>
    //   bike.name.toLowerCase().includes(normalizedThisFilterState),
    // );
    return (
    <Layout>
      <Header title = "ADMIN.BIKE-BOOKING.COM" />

      <Section title = "section 1"></Section>
      <Section title = "section 2">
        <Form onSubmit={this.formSubmitHandler} />
      </Section>

      <Footer title = "Developer: Halyna Kolpakova" />
    </Layout>
  )} 
}

export default App;
