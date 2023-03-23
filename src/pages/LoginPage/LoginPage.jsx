import LoginForm from '../../modules/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
