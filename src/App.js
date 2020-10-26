import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppProvider } from './AppContext'
import Home from './Home'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import DietComplete from './DietComplete'
import './App.css'

const App = () => {

  return (
    <AppProvider>
      <div className="App">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/diet/step-one" component={StepOne} />
                <Route path="/diet/step-two" component={StepTwo} />
                <Route path="/diet/step-three" component={StepThree} />
                <Route path="/diet/step-four" component={StepFour} />
                <Route path="/diet/step-five" component={StepFive} />
                <Route path="/diet/complete" component={DietComplete} />
              </Switch>
            </Router>
      </div>
    </AppProvider>
  )
}
export default App


  // The App component contains all our routes
  // Wrapped with our AppProvider from the AppContext component
  // Context is used to pass data/state to child components
