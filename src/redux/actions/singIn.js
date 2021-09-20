export const LOGIN = 'LOGIN';

export const addUser = (email) => ({
  type: LOGIN,
  email,
});
