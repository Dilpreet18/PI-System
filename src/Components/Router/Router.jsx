import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PublicRoute from './PublicRouter'
import Login from '../pages/Authentication/Login'
import SignUp from '../pages/Authentication/SignUp'
import ForgotPassword from '../pages/Authentication/ForgotPassword'
import PrivateRoute from './PrivateRouter'
import Dashboard from '../pages/dashboard'
import { auth } from '../../services/firebase/firebase'

const Routes = () => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log({ public: authUser })
      return authUser?.uid ? setIsLogin(true) : setIsLogin(false)
    })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute isLogin={isLogin} component={Login} path="/" exact />
        <PublicRoute isLogin={isLogin} component={SignUp} path="/signup" />
        <PublicRoute
          isLogin={isLogin}
          component={ForgotPassword}
          path="/forgotpassword"
        />
        <PrivateRoute
          isLogin={isLogin}
          component={Dashboard}
          path="/dashboard"
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
