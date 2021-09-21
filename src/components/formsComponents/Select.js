import React from 'react';
import { string, arrayOf, func, objectOf } from 'prop-types';

function Select(props) {
  const { name, label, options, value, handleChange } = props;
  return (
    <label htmlFor={ name }>
      { label }
      <select
        id={ name }
        name={ name }
        value={ value }
        onChange={ handleChange }
      >
        { options.map(
          ({ val, lab }) => <option key={ lab } value={ val }>{ lab }</option>,
        )}
      </select>
    </label>
  );
}

Select.propTypes = {
  options: arrayOf(objectOf(string)).isRequired,
  name: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Select;
