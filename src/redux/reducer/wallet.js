import { FETCH_ERROR_CASES,
  FETCH_SUCCESS_COINS,
  FETCH_SUCCESS_CURRENT,
  EXPENSE_DETAILS,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenseDetail: {},
  editExpense: {},
  edit: false,
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  const { type, error, response, payload, id, edit } = action;
  switch (type) {
  case FETCH_SUCCESS_COINS:
    return {
      ...state,
      currencies: response,
    };
  case FETCH_ERROR_CASES:
    console.log(error);
    return {
      ...state,
      error,
    };
  case FETCH_SUCCESS_CURRENT:
    return {
      ...state,
      edit,
      expenses: [
        ...state.expenses,
        payload,
      ],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: state.expenses.find((expense) => expense.id === id),
      edit,
    };
  case EXPENSE_DETAILS:
    return {
      ...state,
      expenseDetail: state.expenses.find((expense) => expense.id === id),
    };
  default:
    return state;
  }
};

export default wallet;
