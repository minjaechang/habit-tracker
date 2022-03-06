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

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // TODO: Check if the function works
    const habits = this.state.habits.filter((item) => {
      return item.id !== habit.id;
    });
    this.setState({ habits });
  };

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
