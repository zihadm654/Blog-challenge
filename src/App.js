import React from 'react';
import './index.scss';
import Footer from './components/Footer.jsx';
import Describe from './layouts/Describe.jsx';
import Hero from './layouts/Hero.jsx';
import Showcase from './layouts/Showcase.jsx';
import Feature from './layouts/Feature.jsx';
const App = () => {
  return (
    <section>
      <Hero />
      <Describe />
      <Showcase />
      <Feature />
      <Footer />
    </section>
  );
};

export default App;
