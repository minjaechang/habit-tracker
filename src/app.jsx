import './app.css';
import HabitAddForm from './components/HabitAddForm';
import Habits from './components/Habits';
import Header from './components/Header';

import React, { Component } from 'react';

class App extends Component {
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
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Header
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <HabitAddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
