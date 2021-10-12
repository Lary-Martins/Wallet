import React from 'react';
import { string, number, func } from 'prop-types';

function InputValue(props) {
  const { name, value, handleChange, label } = props;

  return (
    <label htmlFor={ name }>
      { label }
      <input
        id={ name }
        type="number"
        name={ name }
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

InputValue.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  value: number.isRequired,
  handleChange: func.isRequired,
};

export default InputValue;
