// import UpdateState from './UpdateState'
// import Iconlist from './Iconlist'
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UpdateState /> */}
      {/* <Iconlist /> */}
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} maxBalls={4}  />
    </div>
  );
}

export default App;
