import React from 'react';
import Header from "components/Header/Header";
import Home from 'components/Contents/Home/Home';
import About from "components/Contents/About/About";
import Project from 'components/Contents/Project/Project';
import Footer from "components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Footer />
    </>
  );
};

export default App;