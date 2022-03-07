import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
  render() {
    return this.props.habits.map((habit) => (
      <Habit
        key={habit.id}
        habit={habit}
        onIncrement={this.props.handleIncrement}
        onDecrement={this.props.handleDecrement}
        onDelete={this.props.handleDelete}
      />
    ));
  }
}

export default Habits;
