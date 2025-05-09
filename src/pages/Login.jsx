import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../constants';
import { isTokenExpired } from '../utils/auth';
import { PROTECTED_ROUTES } from '../constants/routeConstants';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(AUTH.BEARER_TOKEN);
    const isExpired = isTokenExpired(token);

    if (!isExpired) {
      navigate(PROTECTED_ROUTES.DASHBOARD);
    }
  });
  return <div>login</div>;
};

export default Login;
