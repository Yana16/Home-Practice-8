import RegisterForm from '../../modules/RegisterForm/RegisterForm';
import { Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { signup } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
