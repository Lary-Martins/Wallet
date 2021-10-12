import { useState, useEffect } from 'react';

function useValidation() {
  const [infoLogin, setInfoLogin] = useState({
    email: '',
    password: '',
  });
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    const { email, password } = infoLogin;
    const MINIMUM_SIZE = 6;
    const VALIDATION_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (password.length >= MINIMUM_SIZE && email.match(VALIDATION_EMAIL)) {
      setValidation(false);
    } else setValidation(true);
  }, [infoLogin]);

  return [validation, setInfoLogin];
}

export default useValidation;
