import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense, editExpense } from '../../redux/actions/index';
import editarIcon from '../../images/favIcon/editar.png';
import excluirIcon from '../../images/favIcon/excluir-lista.png';
// import imgTags from '../../helper/imgTags';

function ExpenseDetails() {
  const dispatch = useDispatch();
  const { expenseDetail } = useSelector((state) => state.wallet);
  const { tag, exchangeRates, currency } = expenseDetail;

  const handleRemoveExpense = (id) => {
    dispatch(removeExpense(id));
  };

  const handleEditExpense = (id) => {
    dispatch(editExpense(id));
    dispatch(removeExpense(id));
  };
  if (expenseDetail.id === undefined) {
    return <h1>Escolha uma despesa ao lado e veja os detalhes dela aqui!</h1>;
  } return (
    <section>
      <span>{ tag }</span>
      <h3>{exchangeRates[currency].name}</h3>
      <div>
        <input
          type="image"
          src={ editarIcon }
          alt="Botão para editar despesa"
          onClick={ handleEditExpense }
        />
        <input
          type="image"
          src={ excluirIcon }
          alt="Botão para editar despesa"
          onClick={ handleRemoveExpense }
        />
      </div>
    </section>
  );
}

export default ExpenseDetails;

/*
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
 */
