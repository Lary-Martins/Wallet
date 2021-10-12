import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense, editExpense } from '../../redux/actions/index';
import Button from '../formsComponents/Button';

function TableBody() {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const handleRemoveExpense = (id) => {
    dispatch(removeExpense(id));
  };

  const handleEditExpense = (id) => {
    dispatch(editExpense(id));
    dispatch(removeExpense(id));
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
              <Button
                type="button"
                label="Edit"
                handleClick={ () => handleEditExpense(id) }
              />
              <Button
                type="button"
                label="X"
                handleClick={ () => handleRemoveExpense(id) }
              />
            </td>
          </tr>
        ),
      )}
    </tbody>
  );
}

export default TableBody;
