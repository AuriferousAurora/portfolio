import React from 'react';

export default () => (
  <div className='projects'>
    <div className='projects__title-card'>
      <span className='title-card__text'>Projects</span>
    </div>
    <div className='projects__content'>
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