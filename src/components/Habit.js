import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <li className='habit'>
        <span className='habit__name'>Coding</span>
        <span className='habit__count'>9</span>
        <button className='habit__increase'>
          <i class='fa-solid fa-plus'></i>
        </button>
        <button className='habit__decrease'>
          <i class='fa-solid fa-minus'></i>
        </button>
        <button className='habit__delete'>
          <i class='fa-solid fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
