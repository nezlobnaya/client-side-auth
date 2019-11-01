import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default  function ProtectedRoute(props) {
      const {
          component: Component,
          ...rest} = props

    return (
        <Route {...rest} render={() => {
            if(localStorage.getItem('token')) {
                return <Component {...props} />
            }else {
                return <Redirect to='/signin' />
            }
        }} />
    )
}
