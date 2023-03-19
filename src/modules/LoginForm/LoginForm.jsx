import useForm from '../../shared/hooks/useForm';
import TextField from '../../shared/components/TextField/TextField';
import fields from '../RegisterForm/fields';
import Button from '../../shared/components/Button/Button';

import initialState from '../RegisterForm/initialState';

import styles from '../LoginForm/login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
