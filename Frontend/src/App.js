import React from 'react';

// import components
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { NavBar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
        <NavBar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;