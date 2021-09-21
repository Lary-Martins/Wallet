import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function useAddition() {
  const { expenses } = useSelector((state) => state.wallet);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (expenses.length > 0) {
      const totalField = expenses.reduce((acc, curr) => {
        const { currency, exchangeRates, value } = curr;
        const convert = Number(exchangeRates[currency].ask) * Number(value);
        return acc + convert;
      }, 0);
      return setAmount(totalField.toFixed(2));
    }
    return setAmount(0);
  }, [expenses]);
  return [amount];
}

export default useAddition;
