export const FETCH_SUCCESS_COINS = 'FETCH_SUCCESS_COINS';
export const FETCH_ERROR_CASES = 'FETCH_ERROR_CASES';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const getCoinsSuccessCase = (response) => ({
  type: FETCH_SUCCESS_COINS,
  response,
});

const failCases = (error) => ({
  type: FETCH_ERROR_CASES,
  error,
});

export const fetchCoins = () => (async (dispatch) => {
  try {
    const request = await fetch(END_POINT);
    const response = await request.json();
    const currencies = Object.keys(response);
    const result = currencies.filter(
      (currency) => currency !== 'USDT' && currency !== 'DOGE',
    );
    const coins = result.map((coin) => ({ val: coin, lab: coin }));

    dispatch(getCoinsSuccessCase(coins));
  } catch (error) {
    dispatch(failCases(error));
  }
});
