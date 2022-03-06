import React, { Component } from 'react';
import styles from './Habit.module.css';

class Habit extends Component {
  render() {
    return (
      <li className={styles.habit}>
        <span className={styles.habit__name}>Coding</span>
        <span className={styles.habit__count}>9</span>
        <button className={`${styles.habit__button} ${styles.habit__increase}`}>
          <i class='fa-solid fa-square-plus'></i>
        </button>
        <button className={`${styles.habit__button} ${styles.habit__decrease}`}>
          <i class='fa-solid fa-square-minus'></i>
        </button>
        <button className={`${styles.habit__button} ${styles.habit__delete}`}>
          <i class='fa-solid fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
