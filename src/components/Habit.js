import React, { Component } from 'react';
import styles from './Habit.module.css';

class Habit extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <li className={styles.habit}>
        <span className={styles.habit__name}>Coding</span>
        <span className={styles.habit__count}>{this.state.count}</span>
        <button
          className={`${styles.habit__button} ${styles.habit__increase}`}
          onClick={this.handleIncrement}
        >
          <i class='fa-solid fa-square-plus'></i>
        </button>
        <button
          className={`${styles.habit__button} ${styles.habit__decrease}`}
          onClick={this.handleDecrement}
        >
          <i class='fa-solid fa-square-minus'></i>
        </button>
        <button
          className={`${styles.habit__button} ${styles.habit__delete}`}
          onClick={this.handleDelete}
        >
          <i class='fa-solid fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
