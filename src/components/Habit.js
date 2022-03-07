import React, { PureComponent } from 'react';
import styles from './Habit.module.css';

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className={styles.habit}>
        <span className={styles.habit__name}>{name}</span>
        <span className={styles.habit__count}>{count}</span>
        <button
          className={`${styles.habit__button} ${styles.habit__increase}`}
          onClick={this.handleIncrement}
        >
          <i className='fa-solid fa-square-plus'></i>
        </button>
        <button
          className={`${styles.habit__button} ${styles.habit__decrease}`}
          onClick={this.handleDecrement}
        >
          <i className='fa-solid fa-square-minus'></i>
        </button>
        <button
          className={`${styles.habit__button} ${styles.habit__delete}`}
          onClick={this.handleDelete}
        >
          <i className='fa-solid fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
