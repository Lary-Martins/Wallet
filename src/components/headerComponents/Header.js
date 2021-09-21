import React from 'react';
import { useSelector } from 'react-redux';
import useAddition from '../../hook/useAddition';

function Header() {
  const [amount] = useAddition();
  const { email } = useSelector((state) => state.registration);

  return (
    <header>
      <aside>
        <h2>
          {`E-mail: ${email}`}
        </h2>
        <h3>
          {`Total de Despesas: ${amount}`}
        </h3>
        <h4>BRL</h4>
      </aside>
    </header>
  );
}

export default Header;
