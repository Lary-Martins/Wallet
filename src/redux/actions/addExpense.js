export const FETCH_SUCCESS_CURRENT = 'FETCH_SUCCESS_CURRENT';
export const FETCH_ERROR_CASES = 'FETCH_ERROR_CASES';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const getCurrentSuccessCase = (payload) => ({
  type: FETCH_SUCCESS_CURRENT,
  payload,
});

const failCases = (error) => ({
  type: FETCH_ERROR_CASES,
  error,
});

export const saveExpenses = (expense) => (async (dispatch) => {
  try {
    const request = await fetch(END_POINT);
    const response = await request.json();
    const payload = { ...expense, exchangeRates: response };
    dispatch(getCurrentSuccessCase(payload));
  } catch (error) {
    dispatch(failCases(error));
  }
});
