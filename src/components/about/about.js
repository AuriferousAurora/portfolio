import React from 'react';
import Headshot from './media/headshot.jpg';

export default () => (
  <div className='about'>
    <img className='about__headshot' src={Headshot} alt='headshot'/>
    <div className='about__text-wrapper'>
        <div className='about__title'>About Me</div>
        <p>
           While I probably don't need to further advertize my name if you've made it this far down the page, I do need to advertize my passion for learning web development. I like writing clean, efficient code, designing and creating web technology, and working with others who share those interests.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, illum possimus? A distinctio sapiente, voluptatum ipsum assumenda recusandae. Natus sit ipsum harum omnis labore earum quam. Aperiam quibusdam rerum aspernatur?
        </p>
      </div>
  </div>
)