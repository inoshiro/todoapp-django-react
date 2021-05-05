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
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleChange = e => setText(e.target.value);

  const handleSubmit = function(event) {
    const todoCopy = todos.slice();
    todoCopy.push(text);
    setTodos(todoCopy);
    setText('');
    event.preventDefault();
  };

  return (
    <div>
      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <input className="p-2" type="text" value={text} onChange={handleChange} />
          <input className="p-2" type="submit" value="Add ToDo" />
        </form>
      </div>
      <TodoItems todos={todos} />
    </div>
  );
}

function Todo({text}) {
  return (
    <div className="flex px-4 py-2 my-2 bg-white rounded-2xl">
      <div className="pr-4 flex-grow">{text}</div>
      <div className="pr-4 flex-none">
        <input type="checkbox" className="h-6 w-6" />
      </div>
    </div>
  );
}

function TodoItems({todos}) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo} text={todo} />
      ))}
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
