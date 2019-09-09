import React from 'react';

export default () => (
  <div className='projects'>
    <div className='projects__info-wrapper'>
      <div className='projects__title'>
        <span>Projects</span>
        
      </div>
      <div className='projects__description'>
        The majority of my work is proprietary, as two of my three previous projects are inacessible to the public. The front-end React prototypes I mentioned above are included as one of the cards in this section. The login page of OSHA Card Portal-- the application that recieved the bulk of my attention --can be found <a href='https://www.oshacardportal.com' style={{'text-decoration': 'none'}} target='_blank' rel='noopener noreferrer'>here</a>. The third project I was involved with was an internal content development tool, also written in Django, that my coworker developed. My other, smaller projects, can be accessed by selecting any of the cards.
      </div>
    </div>
    <div className='projects__content-wrapper'>
      <div className='project__spacing-element'></div>
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
      <div className='project__spacing-element--last'></div>
    </div>
  </div>
)