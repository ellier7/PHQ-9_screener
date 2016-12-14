import React from 'react'
import { render } from 'react-dom'

// Import Components
import App from './components/App'
import Questionnaire from './components/Questionnaire'
import AnswerChoices from './components/AnswerChoices'
import Submit from './components/Submit'
import Appointment from './components/Appointment'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Questionnaire}></IndexRoute>
         <Route path="/results" component={Submit} />
          <Route path="/appointment" component={Appointment} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'))
