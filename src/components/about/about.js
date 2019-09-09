import React from 'react';
import Headshot from './media/headshot.jpg';

export default () => (
  <div className='about'>
    <img className='about__headshot' src={Headshot} alt='headshot'/>
    <div className='about__text-wrapper'>
        <div className='about__title'>About Me</div>
        <p>
          My passion for web-development, my ability to both teach myself and learn well from others, and my strong communication skills make me a valuable asset to any team. My 'want-to-learn' subjects include machine-learning, data analysis, statistics, and many others. As such, any projects I take up outside of work will render me a more valuable asset to any team I am made part of.
        </p>
        <p>
          Outside of work, I enjoy spending time with friends, learning, watching and discussing movies, rock-climbing, exercising, coffee and much more. I enjoy coffee inside of work as well. 
        </p>
      </div>
  </div>
)