import React from 'react';
import Headshot from './media/headshot.jpg';

export default () => (
  <div className='about'>
    <img className='about__headshot' src={Headshot} alt='headshot'/>
    <span className='about__text'>While I probably don't need to further advertize my name if you've made it this far down the page, I do need to advertize my passion for learning web development. I like writing clean, efficient code, designing and creating web technology, and working with others who share those interests.</span>
  </div>
)