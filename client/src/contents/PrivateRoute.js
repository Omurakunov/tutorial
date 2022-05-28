import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
const PrivateRoute = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('jwt'));
    return token ? children : <Navigate to="/login"/>
}

export default PrivateRoute;
