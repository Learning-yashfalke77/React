import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div className='App'>
        <Navbar />

        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}
        />


        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} pageSize={12} country="in" category="general" /></Route>
          <Route key="buisness" exact path="/buisness" render={() => (<News setProgress={this.setProgress} pageSize={12} country="in" category="buisness" />)} />
          <Route key="entertainment" exact path="/entertainment" render={() => (<News setProgress={this.setProgress} pageSize={12} country="in" category="entertainment" />)} />
          <Route key="health" exact path="/health" render={() => (<News setProgress={this.setProgress} pageSize={12} country="in" category="health" />)} />
          <Route key="science" exact path="/science" render={() => (<News setProgress={this.setProgress} pageSize={12} country="in" category="science" />)} />
          <Route key="sports" exact path="/sports" render={() => (<News setProgress={this.setProgress} pageSize={12} country="in" category="sports" />)} />
          <Route key="technology" exact path="/technology" render={() => (<News setProgress={this.setProgress} pageSize={12} country="in" category="technology" />)} />
        </Switch>

      </div>
    )
  }
}

