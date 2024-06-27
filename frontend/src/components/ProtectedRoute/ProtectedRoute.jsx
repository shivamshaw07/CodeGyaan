import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate, useNavigate} from 'react-router-dom'
import { checkToken } from '../../servies/operations/authOpertaion';
import toast from 'react-hot-toast';

const ProtectedRoute = ({children}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      let validToken = await checkToken();
      if (!validToken) {
        dispatch(logout());
        toast.error('Please Login Again');
        navigate('/login');
      }
    };
    verifyToken();
  }, [dispatch, navigate]);
  if(token !== null){
    return children
  }
  return <Navigate to='/login'/>
}

export default ProtectedRoute