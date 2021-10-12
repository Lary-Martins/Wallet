import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveExpenses, fetchCoins } from '../../redux/actions/index';
import { methods, category } from '../../helper/optionsSelect';
import Input from './Input';
import InputValue from './InputValue';
import Button from './Button';
import Select from './Select';

function EditForm() {
  const dispatch = useDispatch();
  const { editExpense, currencies } = useSelector((state) => state.wallet);

  const [expenses, setExpenses] = useState({
    value: editExpense.value,
    description: editExpense.description,
    currency: editExpense.currency,
    method: editExpense.method,
    tag: editExpense.tag,
    id: editExpense.id,
  });

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    setExpenses((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(saveExpenses(expenses));
  };
  if (editExpense < 1) {
    return <h1>Carregando...</h1>;
  }
  return (
    <section>
      <form>
        <InputValue
          label="Valor"
          name="value"
          value={ expenses.value }
          handleChange={ handleChange }
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          value={ expenses.description }
          handleChange={ handleChange }
        />
        <Select
          label="Moeda"
          name="currency"
          value={ expenses.currency }
          options={ currencies }
          handleChange={ handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          value={ expenses.method }
          options={ methods }
          handleChange={ handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          value={ expenses.tag }
          options={ category }
          handleChange={ handleChange }
        />
        <Button
          label="Finalizar"
          handleClick={ handleSubmit }
        />
      </form>
    </section>
  );
}

export default EditForm;
