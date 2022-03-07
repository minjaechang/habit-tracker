import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <span className={styles.header__title}>Habit Tracker</span>
        <span className={styles.header__count}>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
