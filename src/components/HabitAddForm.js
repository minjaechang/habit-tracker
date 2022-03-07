import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <form>
        <input
          className='form__input'
          type='text'
          placeholder='Enter new habit!'
        />
        <button className='form__button' type='submit'>
          Add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
