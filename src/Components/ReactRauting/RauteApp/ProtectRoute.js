import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectRoute({isLoggin,children}) {
  if(!isLoggin){
    return <Navigate to="/" replace />
  }else{
    return children; 
  }
}

export default ProtectRoute
