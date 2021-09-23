import React from 'react';
import { string, func, bool } from 'prop-types';

function Button(props) {
  const { label, submit, disabled } = props;
  return (
    <button
      type="button"
      onClick={ submit }
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
  submit: func.isRequired,
};

export default Button;
