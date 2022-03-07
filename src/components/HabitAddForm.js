import React, { Component } from 'react';
import styles from './HabitAddForm.module.css';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
  };

  render() {
    return (
      <form
        ref={this.formRef}
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          className={styles.form__input}
          type='text'
          placeholder='Enter new habit!'
        />
        <button className={styles.form__button} type='submit'>
          Add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
