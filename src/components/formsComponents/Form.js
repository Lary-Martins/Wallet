import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveExpenses, fetchCoins } from '../../redux/actions/index';
import { methods, category } from '../../helper/optionsSelect';
import Input from './Input';
import Button from './Button';
import Select from './Select';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

function Form() {
  const [id, setId] = useState(0);
  const [expenses, setExpenses] = useState(INITIAL_STATE);
  const { currencies } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    setExpenses((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    setId({ id: id + 1 });
    const infoExpense = { ...expenses, id };
    dispatch(saveExpenses(infoExpense));

    setExpenses(INITIAL_STATE);
  };

  if (currencies.length < 1) {
    return <h1>Carregando...</h1>;
  }
  return (
    <section>
      <form>
        <Input
          label="Valor"
          type="number"
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
          label="Adicionar despesa"
          submit={ handleSubmit }
        />
      </form>
    </section>
  );
}

export default Form;
