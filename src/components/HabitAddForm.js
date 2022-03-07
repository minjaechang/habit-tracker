import React, { Component } from 'react';

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
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
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
