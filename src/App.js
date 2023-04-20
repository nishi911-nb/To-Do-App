import { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import DisplayTodo from './Components/DisplayTodo';
import ToggleTheme from './Components/ToggleTheme';

function App() {

  const [lists, setLists] = useState([
    {id: 1, task: 'Buy Milk'},
    {id: 2, task: 'Buy bread'}
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.round(Math.random() * 100);
    const task = e.target.add.value;
    if(task.length > 0){
      const validTodo = task.trim();
      const newTodo = [...lists, {id: id, task: validTodo}];
      setLists(newTodo);
    }
  }

  const handleDelete = (id) => {
    const filterTodo = lists.filter(list => list.id !== id);
    setLists(filterTodo);
  }

  const handleClear = () => {
    const emptyArray = [];
    setLists(emptyArray);
  }

  const [theme, setTheme] = useState({
      backgroundColor: 'white',
      color: '#414141'
  });

  const handleLightTheme = () => {
    setTheme({
      backgroundColor: 'white',
      color: '#414141'
    });
}

  const handleDarkTheme = () => {
      setTheme({
        backgroundColor: 'rgb(46, 46, 46)',
        color: 'white'
      });
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-content" style={{backgroundColor: theme.backgroundColor}}> 
        <ToggleTheme lightTheme={handleLightTheme} darkTheme={handleDarkTheme}/>
        <AddTodo handleSubmit={handleSubmit} theme={theme}/>
        <div className='clearTask'>
          <button style={{backgroundColor: theme.backgroundColor, color: theme.color}} onClick={handleClear}>Clear All</button>
        </div>
        <DisplayTodo lists={lists} handleDelete={handleDelete} theme={theme}/>
      </div>
    </div>
  );
}

export default App;
