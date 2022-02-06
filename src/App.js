import React from 'react';
import Header from "components/Header/Header";
import Home from "components/Contents/Home";
import About from "components/Contents/About";
import Project from 'components/Contents/Project';
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