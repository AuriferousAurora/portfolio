import React, { Component } from 'react';
export const Header = class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: ''
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 25) {
      this.setState({background: 'header--transparent'})
    } else {
      this.setState({background: 'header--clear'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className={'header ' + this.state.background}>
        <div className='header__left_wrapper'>
          <div className='header__name'>Kyle Everett Lang</div>
          <div className='header__separator'>|</div>
          <div className='header__title'>Web Developer</div>
        </div>
        <div className='header__email'>
          <a href='mailto:kyle.everett.lang@gmail.com'>kyle.everett.lang@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default Header;