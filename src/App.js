import React from 'react';
import Header from 'components/Header/Header';
import Home from 'components/Contents/Home/Home';
import About from 'components/Contents/About/About';
import Project from 'components/Contents/Project/Project';
import Footer from 'components/Footer/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="김필진 포트폴리오"
        />
        <title>김필진 포트폴리오</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Helmet>
      <Header />
      <Home />
      <About />
      <Project />
      <Footer />
    </>
  );
};

export default App;
