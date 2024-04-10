import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const OpenRoute = ({children}) => {
    const {token} = useSelector(state => state.auth)
    const loaction = useLocation()
  
    if(!token){
        return children
    }
    
    <Navigate to={(loaction.pathname)} />
}

export default OpenRoute