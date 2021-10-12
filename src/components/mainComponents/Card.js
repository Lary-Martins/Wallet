import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { expenseDetails } from '../../redux/actions/expenseDetail';
import imgTags from '../../helper/imgTags';
import Button from '../formsComponents/Button';

function Card() {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const handleShowDetails = (id) => {
    dispatch(expenseDetails(id));
  };

  if (expenses.length < 1) {
    return <span>Adicione uma despesa e ela aparecerá aqui!</span>;
  } return (
    <>
      { expenses.map(({ id, tag, value, exchangeRates, currency }) => (
        <div className="main-card" key={ id }>
          <span>{ tag }</span>
          <span>{ exchangeRates[currency].name }</span>
          <h3>{ Math.round(value * exchangeRates[currency].ask * 100) / 100 }</h3>
          <div>
            <img alt={ tag } src={ imgTags[tag].img } />
          </div>
          <Button
            type="button"
            label="Mais detalhes"
            handleClick={ () => handleShowDetails(id) }
          />
        </div>
      ))}
    </>
  );
}

export default Card;
