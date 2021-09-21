import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpenses } from '../../redux/actions/index';

function TableBody() {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const handleRemoveExpense = (id) => {
    dispatch(removeExpenses(id));
  };

  return (
    <tbody>
      {expenses.map(
        ({ id, description, tag, method, value, exchangeRates, currency }) => (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ exchangeRates[currency].name }</td>
            <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
            <td>{ Math.round(value * exchangeRates[currency].ask * 100) / 100 }</td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => handleRemoveExpense(id) }
              >
                X
              </button>
            </td>
          </tr>
        ),
      )}
    </tbody>
  );
}

export default TableBody;
