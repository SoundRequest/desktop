import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/main.css'
import './index.css'
import * as serviceWorker from './serviceWorker'

import App from './components/App.js'
import SignIn from './pages/Auth/SignIn.js'
import SignUp from './pages/Auth/SignUp.js'
import VerifyEmail from './pages/Auth/VerifyEmail'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Home from './pages/Main/Home.js'
import Chart from './pages/Main/Chart.js'
import PlayList from './pages/Main/PlayList.js'
import PlayListDetail from './pages/Main/PlayListDetail'
import Settings from './pages/Main/Settings.js'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import AuthGuard from './components/HOCs/authGuard'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <App>
          <Route exact path='/' component={AuthGuard(Home)} />
          <Route path='/chart' component={AuthGuard(Chart)} />
          <Route path='/playlist' component={AuthGuard(PlayList)} />
          <Route path='/listd' component={AuthGuard(PlayListDetail)} />
          <Route path='/settings' component={AuthGuard(Settings)} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/verifyemail' component={VerifyEmail} />
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
