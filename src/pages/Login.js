import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addUser } from '../redux/actions/index';
import useValidation from '../hook/useValidation';
import Button from '../components/formsComponents/Button';
import Input from '../components/formsComponents/Input';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [validation, setInfoLogin] = useValidation();
  const [login, setLogin] = useState(INITIAL_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setLogin((state) => ({ ...state, [name]: value }));
    setInfoLogin({ ...login });
  };

  const handleSubmit = () => {
    const { email } = login;

    dispatch(addUser(email));
    push('/carteira');
  };

  return (
    <form>
      <Input
        type="email"
        name="email"
        value={ login.email }
        label="E-mail"
        handleChange={ handleChange }
      />
      <Input
        type="password"
        name="password"
        value={ login.password }
        label="Senha"
        handleChange={ handleChange }
      />
      <Button
        submit={ handleSubmit }
        label="Entrar"
        disabled={ validation }
      />
    </form>
  );
}

export default Login;
