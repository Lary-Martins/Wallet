import React from 'react';
import { string, func, number } from 'prop-types';

function Input(props) {
  const { name, type, value, handleChange, label } = props;

  const setPropTypes = () => {

  }

  return (
    <label htmlFor={ name }>
      { label }
      <input
        id={ name }
        type={ type }
        name={ name }
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  label: string.isRequired,
  value: number.isRequired,
  handleChange: func.isRequired,
};

export default Input;
