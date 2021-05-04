import logo from './logo.svg';
import './App.css';
import React from 'react';

function Title() {
  return (
    <div class="p-8 bg-green-500">
      <h1 class="font-mono font-bold text-4xl text-white">ToDo App</h1>
    </div>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="flex px-4 py-2 my-2 bg-white rounded-2xl">
        <div class="pr-4 flex-grow">{this.props.text}</div>
        <div class="pr-4 flex-none">
          <input type="checkbox" class="h-6 w-6" />
        </div>
      </div>
    );
  }
}

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: Array(),
    }
  }

  render() {
    return (
      <div>
        <Todo text='hoge' />
        <Todo text='fuga' />
        <Todo text='aaaaaaa' />
      </div>
    );
  }
}

function App() {
  return (
    <div className="min-h-screen justify-center bg-gray-100">
      <Title />
      <div class="p-8">
        <TodoItems />
      </div>
    </div>
  );
}

export default App;
