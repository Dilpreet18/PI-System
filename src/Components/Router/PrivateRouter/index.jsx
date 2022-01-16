import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isLogin ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  )
}

export default PrivateRoute
