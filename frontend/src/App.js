import './App.css';
import React from 'react';

function Title() {
  return (
    <div className="p-8 bg-green-500">
      <h1 className="font-mono font-bold text-4xl text-white">ToDo App</h1>
    </div>
  );
}

function ToDoForm() {
  const getKey = () => Math.random().toString(32).substring(2);

  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');
  const [filter, setFilter] = React.useState('All');

  const handleChange = e => setText(e.target.value);

  const handleSubmit = function(event) {
    const todoCopy = todos.slice();
    todoCopy.unshift({key: getKey(), text: text, finished: false});
    setTodos(todoCopy);
    setText('');
    event.preventDefault();
  };

  const handleCheck = checked => {
    const newTodos = todos.map(todo => {
      if (todo.key === checked.key) {
        todo.finished = !todo.finished;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleFilterChange = value => setFilter(value);

  const displayTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'ToDo') return !todo.finished;
    if (filter === 'Done') return todo.finished;
  });

  return (
    <div>
      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <input className="p-2" type="text" value={text} onChange={handleChange} />
          <input className="p-2" type="submit" value="Add ToDo" />
        </form>
      </div>
      <Filter value={filter} onChange={handleFilterChange} />
      <div>
        {displayTodos.map(todo => (
          <Todo
            key={todo.key}
            todo={todo}
            onCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
}

function Filter({value, onChange}) {
  const handleClick = tabName => {
    onChange(tabName);
  }

  return (
    <div className="p m-2 border-b flex justify-center">
      <FilterTab name='All' selected={value} onClick={handleClick} />
      <FilterTab name='ToDo' selected={value} onClick={handleClick} />
      <FilterTab name='Done' selected={value} onClick={handleClick} />
    </div>
  );
}

function FilterTab({name, selected, onClick}) {
  const getStyle = (name, selected) => {
    let style = 'mx-4 px-4 rounded-t-lg cursor-pointer'
    if (name == selected) {
      style += ' bg-gray-300';
    } else {
      style += ' bg-white';
    }
    return style;
  }

  const handleClick = () => {
    onClick(name);
  }

  return (
    <div className={getStyle(name, selected)} onClick={handleClick}>{name}</div>
  );
}

function Todo({todo, onCheck}) {
  const handleChange = () => {
    onCheck(todo);
  };

  return (
    <div className="flex px-4 py-2 my-2 bg-white rounded-2xl">
      <div className="pr-4 flex-grow">{todo.text}</div>
      <div className="pr-4 flex-none">
        <input
          type="checkbox"
          className="h-6 w-6"
          checked={todo.finished}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen justify-center bg-gray-100">
      <Title />
      <div className="p-4">
        <ToDoForm />
      </div>
    </div>
  );
}

export default App;
