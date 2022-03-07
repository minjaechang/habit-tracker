import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <span className='header__title'>Habit Tracker</span>
        <span className='header__count'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
