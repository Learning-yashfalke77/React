
// import Timer from './Timer'

import './App.css';
import ZenQuote from './ZenQuote';

// ---------------------------------- Lifecycle Methods ---------------------------------------------
// Every component comes with method that allows developers to update their application states and reflect the changes to UI before/after key react events/stages
// There are three phases to know about
// 1) mounting
// 2) Updating
// 3) Unmounting

// React flows is like, when you call component then inside component : Constructor, Render, then react updates DOM 

// 1) ComponentDidMount will run after the - react make the dom changes, Automatically
//  Mounting is the first time the component is rendered to DOM
// This is a good place to load any data via AJAX or setup subscriptions/timers
// Calling setstate in did Mount it will trigger the re render
// Component did mount will run once at the beginning , but not run again in re render, on rerender on render will run
// Adding the ajax data in componenet did mount

// 2) Component did update
// did update runs every after the re render happens
// Here we can get info about prevstate as well as prev props

// 3)Componenet will unmount
// Whenever  component is unmounted or destroyed this will be called



function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <ZenQuote />
    </div>
  );
}

export default App;
