import React, { Component, Fragment } from 'react';

import './index.sass';

import Header from '../components/header/header';
// import Intro from '../components/intro/intro';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import About from '../components/about/about';
import Footer from '../components/footer/footer';

export default class Application extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Skills/>
        <Projects/>
        <About/>
        <Footer/>
      </Fragment>
    );
  }
};
