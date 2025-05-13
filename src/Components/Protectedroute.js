import React from 'react';
import { Navigate } from 'react-router-dom';

const Protectedroute = ({children}) => {
   const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? children : <Navigate to={'/login'}/>
}

export default Protectedroute
