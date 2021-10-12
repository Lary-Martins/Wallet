import React from 'react';
import { string, func, bool } from 'prop-types';

function Button(props) {
  const { label, handleClick, disabled } = props;
  return (
    <button
      type="button"
      onClick={ handleClick }
      disabled={ disabled }
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: bool,
  label: string.isRequired,
  handleClick: func.isRequired,
};

export default Button;
