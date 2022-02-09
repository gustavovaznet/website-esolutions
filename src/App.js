//APP

//IMPORTING
import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Programs from './components/Programs';
import Footer from './components/Footer';
import navItems from './contents/nav.json';
import programs from './contents/programs.json';
import showcase from './contents/showcase.json';
import footer from './contents/footer.json';

//APP
class App extends Component {
  render() {
    return (
      <Container>
        <Hero 
          navItems={navItems.navItems}
        />
        <Showcase showcase={showcase.showcase} />
        <Programs programs={programs.programs} />
        <Footer footer={footer}/>
      </Container>
    );
  }
}

export default App;
