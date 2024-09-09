import React from 'react'
import {Route,Redirect} from "react-router-dom";
import DefaultLayout from '../login/layout/partials/DefaultLayout';

const isAuth = true;
const PrivateRoute = ({children , ...rest}) => {
  return (
    <Route 
    {...rest}
     render={() => 
        isAuth ?<DefaultLayout>{children} </DefaultLayout> :<Redirect to="/" />
     }
    />

    
  );
};

export default PrivateRoute
