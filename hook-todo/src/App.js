import './App.css';
import { TodosProvider } from './context/todos.context';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
}

export default App;
