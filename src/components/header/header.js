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
      <div className={'header ' + this.state.background} >
        <div className='header__email'>kyle.everett.lang@gmail.com</div>
      </div>
    );
  }
}

export default Header;