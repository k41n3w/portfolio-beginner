import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
