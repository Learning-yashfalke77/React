import './App.css';
import Food from './Food';
import { Switch, NavLink, Route, useParams } from 'react-router-dom'
import Meal from './Meal';
import NotFound from './NotFound';
import FoodSearch from './FoodSearch';
import WithRouter from './WithRouter';



function App() {

  let { name } = useParams()
  console.log(name)

  return (
    <div className="App">



    {/* ---------------------------------- with router ----------------------------------------------- */}
    <WithRouter />

      <Switch>
        {/* ------------------------------------ For class components --------------------------- */}
        <Route exact path="/food/:name" render={(routeProps) => (<Food {...routeProps}  />)} /> 
        {/* Use this in class componenet , in functional component use useParams */}
        <Route exact path="/food/:name" component={Food} />   {/* using component no need to pass as props, but cannot pass our own props */}

        {/* ----------------------------------- For functional Components ----------------------------- */}
        <Route exact path="/food/:foodName/drink/:drinkName"> <Meal/> </Route>

        

        {/* ------------------------------------ search functionality -------------------------------- */}
        <Route path="/" render={(routerProps) => (<FoodSearch {...routerProps} />)} />

        

        {/* ------------------------------------ 404 page not found ------------------------------------- */}
        <Route > <NotFound/> </Route>

      </Switch>
    </div>
  );
}

export default App;
