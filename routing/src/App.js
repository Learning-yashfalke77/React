import { Link, Route, Switch, NavLink } from 'react-router-dom'
import About from './About';
import './App.css';
import Contact from './Contact';
import Dog from './Dog';


// For routing we used a tool in react called react routing
// npm install react-router-dom

function App() {
  return (
    <div className="App">


      {/* For linking to route donot use anchor tag but link tag is used */}
      {/* Navlink same as link but has additional feature to highlt the link on which we are present but give exact otherwise it will highlight multiple */}

      <nav>
        <h3>Using link tag(Right way)</h3>
        <Link to="/">Home  </Link>
        <Link to="/dogs">dogs  </Link>
        <Link to="/contacts">contacts  </Link>
        <br />
        <h3>using anchor tag (Wrong way)</h3>
        <a href="/">Home</a>
        <a href="/dogs">dogs </a>
        <a href="/contacts">contacts </a>
        <h3>Using Navlink (Right way with extra features)</h3>
        <NavLink activeClassName="active-link" exact to="/">Home</NavLink>
        <NavLink activeClassName="active-link" exact to="/dogs">dogs</NavLink>
        <NavLink activeClassName="active-link" exact to="/contacts">contacts</NavLink>
      </nav>

      {/* ----------------  Method 1 for routing ----------------- */}
      {/* It matches the given links as many as possible */}
      {/* switch will help in matching one only not many but leads to problem of checking pattern not exact to do that use exact */}
      {/* <Switch> 
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={About} />
      </Switch> */}

      {/* This is preffered method 2   */}

      <Switch>
        <Route exact path="/"> <About /> </Route>
        <Route exact path="/dogs"> <Dog name="Muffins" /> </Route>
        <Route exact path="/contacts"> <Contact /> </Route>
      </Switch>

      {/* Generally use switch with exact and remove it if it is necessary */}

    </div>
  );
}

export default App;
