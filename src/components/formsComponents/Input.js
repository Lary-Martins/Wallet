import React from 'react';
import { string, func } from 'prop-types';

function Input(props) {
  const { name, type, value, handleChange, label, src } = props;

  return (
    <label htmlFor={ name }>
      { label }
      <input
        id={ name }
        type={ type }
        name={ name }
        src={ src }
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

Input.defaultProps = {
  src: null,
};

Input.propTypes = {
  src: string,
  name: string.isRequired,
  type: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Input;
