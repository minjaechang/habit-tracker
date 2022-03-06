import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Coding', count: 0 },
      { id: 2, name: 'Reading', count: 0 },
      { id: 3, name: 'Exercise', count: 0 },
    ],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  handleDelete = () => {};

  render() {
    return this.state.habits.map((habit) => (
      <Habit
        key={habit.id}
        habit={habit}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    ));
  }
}

export default Habits;
