import React from 'react';

export default () => (
  <div className='projects'>
    <div className='projects__info-wrapper'>
      <div className='projects__title'>
        <span>Project Name</span>
        
      </div>
      <div className='projects__description'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis animi soluta, blanditiis asperiores earum consequatur dolore mollitia, tempora pariatur, perferendis ab possimus minus necessitatibus neque. Odit quidem iusto totam quas?
      </div>
    </div>
    <div className='projects__content-wrapper'>
      <a href='https://github.com/AuriferousAurora/TDC-Fashion' target='_blank' rel='noopener noreferrer' className='project project--tdc-fashion'>
        <span className='project-title'>TDC Fashion</span>
      </a>
      <a href='https://github.com/AuriferousAurora/StockClub' target='_blank' rel='noopener noreferrer' className='project project--stock-club'>
        <span className='project-title'>Stock Club</span>
      </a>
      <a href='https://github.com/AuriferousAurora/D8' target='_blank' rel='noopener noreferrer' className='project project--d8'>
        <span className='project-title'>D8</span>
      </a>
      <a href='https://github.com/AuriferousAurora/remindPro' target='_blank' rel='noopener noreferrer' className='project project--remind-pro'>
        <span className='project-title'>Remind Pro</span>
      </a>
    </div>
  </div>
)