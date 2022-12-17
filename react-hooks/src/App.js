import './App.css';
import CountState from './CountState';
import SimpleForm from './SimpleForm';
import Toggle from './Toggle';
import Clicker from './Clicker'
import Swapi from './Swapi';

// React hooks basically allows you to write function or functional components that have all of features of class based components, things are shorter

function App() {
  return (
    <div className="App">
      {/* <CountState />
      <Toggle />
      <SimpleForm />
      <Clicker /> */}
      <Swapi />
    </div>
  );
}

export default App;
