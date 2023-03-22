import useForm from '../../shared/hooks/useForm';
import TextField from '../../shared/components/TextField/TextField';
import fields from '../../modules/RegisterForm/fields';
import Button from '../../shared/components/Button/Button';

import initialState from '../../modules/RegisterForm/initialState';

import styles from '../../modules/RegisterForm/register-form.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
