import React, { Fragment } from 'react';

import './index.sass';

import Header from '../components/header/header';
import Intro from '../components/intro/intro';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';

export default () => (
  <Fragment>
    <Header/>
    <Intro/>
    <Skills/>
    <Projects/>
  </Fragment>
);
