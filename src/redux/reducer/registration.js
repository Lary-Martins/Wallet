import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const registration = (state = INITIAL_STATE, action) => {
  const { type, email } = action;
  if (type === LOGIN) {
    return {
      ...state,
      email,
    };
  } return state;
};

export default registration;
